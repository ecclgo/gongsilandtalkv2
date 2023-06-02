import {
  InfoMessage,
  InfoMessageSub,
  NotCheckedAlarm,
  NotCheckedCnt,
} from '@/components/alarm/Alarm';

export default function ProductInfoAlarm() {
  return (
    <>
      <NotCheckedAlarm>
        미확인 알림
        <NotCheckedCnt>0건</NotCheckedCnt>
      </NotCheckedAlarm>
      <InfoMessage>새로운 알림이 없습니다.</InfoMessage>
      <InfoMessageSub>
        알림 받고 싶은 매물에 알림 받기 등록을 해보세요.
      </InfoMessageSub>
    </>
  );
}
