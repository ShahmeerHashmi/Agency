import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only run for dashboard routes
  if (request.nextUrl.pathname.startsWith('/Dashboard')) {
    const cookie = request.cookies.get('payload-token')
    if (!cookie) {
      // Not authenticated, redirect to login
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  // Allow request
  return NextResponse.next()
}

export const config = {
  matcher: ['/Dashboard/:path*'],
}
