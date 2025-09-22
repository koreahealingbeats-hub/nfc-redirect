// pages/api/nfc-redirect.js

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'];

  if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iOS')) {
    // iOS (iPhone, iPad) 기기 감지
    // 애플 앱스토어 링크로 리디렉션
    res.redirect('https://apps.apple.com/kr/app/%ED%9E%90%EB%A7%81%EB%B9%84%ED%8A%B8-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4-%EB%A7%A4%EB%8B%88%EC%A0%80/id1590663451'); // 실제 앱 ID로 변경
  } else if (userAgent.includes('Android')) {
    // 안드로이드 기기 감지
    // 구글 플레이스토어 링크로 리디렉션
    res.redirect('https://play.google.com/store/apps/details?id=bae.iklyal.healingbeat'); // 실제 패키지 ID로 변경
  } else {
    // 그 외 기기 (PC 등)
    // 회사 웹사이트나 앱 소개 페이지로 리디렉션
    res.redirect('https://www.stresssolution.io/'); 
  }
}