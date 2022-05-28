import Link from "next/link"

const Waitlist = () => {
  return (
    <div className="bg-brand-dark rounded dark:bg-brand text-brand dark:text-brand-dark p-8">
      <p className="text-xl">New drm&bull;lb App</p>
      <h1 className="text-4xl">Early Access Waitlist</h1>
      <p className="text-gray-500 my-4">Sign up today and be the first to know when it&apos;s ready for beta testing</p>
      <div className="flex flex-wrap items-center justify-center gap-8  md:flex-row">
        <div className="flex flex-col items-center">
          <img src="/waitlist/1.svg" loading="lazy" width="84" alt="" />
          <p className="paragraph-14 small">Simple to start</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/waitlist/2.svg" loading="lazy" width="84" alt="" />
          <p className="paragraph-14 small">Easy to add on to</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/waitlist/3.svg" loading="lazy" width="84" alt="" />
          <p className="paragraph-14 small">Evolve together</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/waitlist/4.svg" loading="lazy" width="84" alt="" />
          <p className="paragraph-14 small">Learn in-journey</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/waitlist/5.svg" loading="lazy" width="84" alt="" />
          <p className="paragraph-14 small">Big community</p>
        </div>
      </div>
      <Link href="/about" ><a className="button max-w-max block mx-auto mt-12">Join Now</a></Link>

    </div>
  )
}

export default Waitlist
