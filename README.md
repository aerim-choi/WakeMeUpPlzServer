# 2022 init 3기 팀프로젝트 WakeMeUpPlz⏰

-----------------

## 프로젝트 소개 ##

기존의 알람앱 기능에, 패턴풀기 횟수 초과로 실패시 지정한 도우미에게 문자를 전송하는 알람 어플리케이션입니다. 
다양한 미션 수행 알람 어플리케이션이 있지만 도전 횟수가 무제한 이라는점. 얼떨결에 문제를 해결하고 다시 잠들 수 있다는 문제점을 생각하다가, 미션에 횟수를 지정하고, 지정한 횟수안에 미션을 해결하지 못하면,지정한 도우미에게 문자를 보내어 기상을 돕게하는 어플이 있으면 재미있을 것 같다고 생각했습니다.  
그래서 WakeMeUp을 만들게 되었습니다. 일반적 기상 어플처럼 기상도우미 호출없이 서비스를 사용할 수도있고, 휴대폰 내 contact의 번호들을 자동으로 불러와 기상도우미를 지정가능하게 합니다.

* 사용한 언어/툴 

  * front-end : kotlin/android studio (김아림,김아진)
  * back-end : js, node-js/visual studio code, aws (최애림,김나영)

* 사용 라이브러리 

  * 패턴풀기 : https://github.com/l7naive/pattern-lock.git
  * 클라이언트-서버 통신 : Retrofit2

* API 문서

  * https://apricot-airport-e27.notion.site/ae29fa290dae47d0b8f3cb8c97141562?v=c8b7dffe57824dd89a2081739844f7c7

* 기능 

  * 회원가입, 로그인, 알람 추가, 삭제, 편집, 패턴풀기

* 개발 기간 

  * 2022.12.23 ~ 2023.1.8

  

## Server Part 소개 ##

  ![WakeMeUpPlz서버파트pdf_page-0001](https://user-images.githubusercontent.com/80438964/212251840-641e3eb0-d5d0-46b6-8c15-94db6e265eb7.jpg)

![WakeMeUpPlz서버파트pdf_page-0002](https://user-images.githubusercontent.com/80438964/212251854-3dbb9aa8-c793-4f4b-9f1c-15b41535fb05.jpg)

- WakeMeUpPlz의 API서버는 자바스크립트 언어와 express프레임워크를 이용하여 구현하였습니다.
  또한 AWS에서 제공하는 EC2를 이용하여 WakeMeUPPlz 서버를 배포하였으며 RDS를 이용하여 WakeMeUpPlz DB서버를 대여하여 MySql과 연동시켰습니다.

  

  ![WakeMeUpPlz서버파트pdf_page-0003](https://user-images.githubusercontent.com/80438964/212251862-33810545-4147-4393-8ff8-1623c7249474.jpg)

- WakeMeUpPlz 데이터 베이스는 회원, 알람 릴레이션으로 이루어져있으며 ERD를 작성하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0004](https://user-images.githubusercontent.com/80438964/212251864-11394e0c-ea8f-460b-9ce0-5ae6196c153a.jpg)

- 릴레이션스키마와 테이블 명세서를 작성하여 WakeMeUpPlz DB를 생성하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0005](https://user-images.githubusercontent.com/80438964/212251866-9ecf9a6d-b0fd-42a5-aa3b-4dc9636127a0.jpg)

- AWS의 RDS를 이용해 WakeMeUpPlz DB서버를 생성하여 MySQL과 Node.js서버와 연결하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0006](https://user-images.githubusercontent.com/80438964/212251872-4e82281e-53e3-4764-a40a-36d067482470.jpg)

- 유저테이블과 알람테이블의 저장된 데이터를 가공하여 가져오는 쿼리를 작성하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0007](https://user-images.githubusercontent.com/80438964/212251875-a71d8260-c2cd-418b-ab30-d6502db32972.jpg)

- 불러온 데이터들을 이용하여 로그인, 회원가입기능을 구현하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0008](https://user-images.githubusercontent.com/80438964/212251878-54e8a0ac-6d32-4f7a-837a-654580f417dc.jpg)

- WakeMeUpPlz회원의 알람리스트 보여주기, 알람 수정, 알람 저장, 알람 삭제 기능을 구현하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0009](https://user-images.githubusercontent.com/80438964/212251879-491f7fef-0bd1-4321-b0b8-d79a647da758.jpg)

- 모델은 User, Alarm이 있으며, 요청에 대하여 서비스와 매핑해주는 controller 로직과
  이를 DB가 필요한 서비스의 경우 storage를 두어서 처리하여 메인로직과 DB로직을 분리하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0010](https://user-images.githubusercontent.com/80438964/212251882-7f05cdd9-58b7-4c02-8e29-8d9b56f845b8.jpg)

- 이러한 API들은 클라이언트 파트담당한 팀원들이 알기 쉽도록 API문서를 작성하였습니다. 

  

![WakeMeUpPlz서버파트pdf_page-0011](https://user-images.githubusercontent.com/80438964/212251883-79a80cf5-211c-4293-8ec4-9a78da45db82.jpg)

- API문서에는 PostMan을 이용하여 예시를 첨부하여 클라이언트 팀원들이 최대한 알아보기 쉽게 하였습니다.

  

![WakeMeUpPlz서버파트pdf_page-0012](https://user-images.githubusercontent.com/80438964/212251884-e8e3f3a5-7702-48b9-bbab-92da4d18af37.jpg)

- 만든 api를 안드로이드 개발 팀원들이 사용하기 위해서는 서버를 배포해주어야 했기 때문에 AWS의 EC2를 이용하여 서버를 배포해주었습니다.



## 🍀실행영상 

![20230113094941-7c011ad592 gif-2-mp4 com](https://user-images.githubusercontent.com/80438964/212255883-b0685c95-7f8f-4736-a2ee-1dc49a7505d2.gif)



## 🍀소감

이번 팀플을 시작할 때 백엔드를 담당한 것이 처음이라 걱정을 많이했었는데 API구현 뿐만 아니라 서버배포까지 경험할 수 있어 재밌었습니다. 또한 클라이언트 담당 팀원이랑 소통하면서 만드는 과정도 즐거웠고 흥미를 느낄 수 있었습니다. 이번 팀프로젝트를 통해 좋은팀원들도 만나고 짧은시간동안 성장할 수 있어 굉장히 의미가 있는 프로젝트 인 것 같습니다. 
