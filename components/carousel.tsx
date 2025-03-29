'use client'
import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

const Carousel = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <Slider {...settings}>
      {posts.map((post) => {
        const { slug, date, title, summary, tags } = post
        return (
          <div key={slug} className="p-4">
            <article>
              <div className="space-y-2">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <div className="space-y-5">
                  <div>
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                </div>
                <div className="text-base leading-6 font-medium">
                  <Link
                    href={`/blog/${slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Read more: "${title}"`}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )
      })}
    </Slider>
  )
}

export default Carousel
