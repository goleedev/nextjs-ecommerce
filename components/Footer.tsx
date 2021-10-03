import styles from 'styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/icon/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Image src={logo} alt={'logo'} className={styles.logo} />
        </a>
      </Link>
      <p className={styles.brand}>(주)라우트육십오</p>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <p>사업자 등록번호 : 123-45-67890 | 대표 : 홍길동</p>
          <p>
            <span>
              호스팅 서비스 : 주식회사 라우트육십오 | 통신판매업 신고번호 :
              2021-서울강남-123456
            </span>
            <span>04958 서울특별시 강남구 역삼동 선릉로 551 새롬빌딩 5F</span>
          </p>
        </div>
        <div className={styles.contentRight}>
          <ul>
            <li>서비스 이용 약관</li>
            <li>개인정보 처리방침</li>
            <li>입점/제휴 문의</li>
          </ul>
          <span>
            Copyright &copy; 라우트육십오{currentYear - 10}-{currentYear} All
            Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
