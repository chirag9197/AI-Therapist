import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}

export default function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /home, /api/test1)
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const publicPaths = ['/', '/home', '/api/test1', '/api/test2', '/employee/login', '/admin/login']
  
  // Check if the path is public
  const isPublicPath = publicPaths.includes(path)

  // If the path is public, allow access
  if (isPublicPath) {
    return NextResponse.next()
  }

  // For all other paths, check for authentication
  const authToken = request.cookies.get('__session')?.value

  // If there's no auth token and the path is not public, redirect to login
  if (!authToken) {
    return NextResponse.redirect(new URL('/employee/login', request.url))
  }

  return NextResponse.next()
}