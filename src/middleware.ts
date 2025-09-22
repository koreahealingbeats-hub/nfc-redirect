import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');
  const iOSLink = 'https://apps.apple.com/kr/app/%ED%9E%90%EB%A7%81%EB%B9%84%ED%8A%B8-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4-%EB%A7%A4%EB%8B%88%EC%A0%80/id1590663451'; // 실제 앱 ID로 변경
  const androidLink = 'https://play.google.com/store/apps/details?id=bae.iklyal.healingbeat'; // 실제 패키지 ID로 변경
  const webLink = 'https://www.stresssolution.io/'; // 그 외 기기용 웹페이지

  if (!userAgent) {
    // 유저 에이전트가 없는 경우 기본 웹사이트로 리디렉션
    return NextResponse.redirect(webLink);
  }

  if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iOS')) {
    // iOS (iPhone, iPad) 기기 감지
    return NextResponse.redirect(iOSLink);
  }

  if (userAgent.includes('Android')) {
    // 안드로이드 기기 감지
    return NextResponse.redirect(androidLink);
  }

  // 그 외 기기 (PC 등)
  return NextResponse.redirect(webLink);
}

export const config = {
  // NFC 태그에서 접근할 경로를 설정합니다.
  // 예를 들어, NFC 태그에 "https://your-domain.com/nfc"를 넣고 싶다면 아래와 같이 설정합니다.
  matcher: '/nfc-redirect',
};