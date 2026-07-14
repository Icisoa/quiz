# 똘계 나트랑 여행 퀴즈

## Vercel 배포
1. 이 폴더 전체를 GitHub 저장소에 올립니다.
2. Vercel에서 **Add New → Project**를 선택합니다.
3. 해당 저장소를 Import한 뒤 별도 설정 없이 Deploy합니다.

또는 Vercel CLI가 설치되어 있다면 이 폴더에서 `vercel` 명령을 실행합니다.

## 점수 저장 방식
현재 버전은 별도 DB 설정 없이 즉시 배포할 수 있도록 브라우저 `localStorage`에 이름과 점수를 저장합니다.
따라서 점수표는 같은 기기·같은 브라우저에서만 공유됩니다.

전체 참가자의 점수를 하나의 온라인 점수표로 모으려면 Supabase, Firebase, Vercel KV 같은 외부 DB 연결이 필요합니다.
