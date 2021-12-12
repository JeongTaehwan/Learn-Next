import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../style/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>개발을 잘하기보단 즐기기를 원하고, 다양한 사람과 소통하는 것을 중요시 합니다. 또한 가치를 창출하는 것을 원합니다.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}