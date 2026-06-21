'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

export default function LoginPage() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please enter username and password')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      await login({ username: username.trim(), password })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 p-4 dark:bg-black">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5 pt-2 pb-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={submitting}
                autoComplete="username"
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-3 px-4 py-2.5">
            <Button type="submit" className="w-full cursor-pointer" disabled={submitting}>
              {submitting ? 'Logging in...' : 'Login'}
            </Button>
            <p className="text-xs text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-primary hover:underline">
                Register
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
