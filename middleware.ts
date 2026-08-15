import { NextRequest, NextResponse } from 'next/server';

const PROTECTED_PATHS = ['/admin/testimonials'];
const LOGIN_PATH = '/admin/login';
const COOKIE_NAME = 'admin_session';
const COOKIE_VALUE = 'authenticated';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin/* routes (excluding login itself)
  const isProtected = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  if (isProtected) {
    const session = request.cookies.get(COOKIE_NAME);
    if (session?.value !== COOKIE_VALUE) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
