function Footer(): JSX.Element {
  return (
    <footer className='bg-stone-800 py-6 text-white'>
      <section className='mx-36 flex items-center gap-4 font-medium'>
        <div>
          <img src='' alt='footer-image' />
        </div>

        <p className='text-lg font-bold'>List your Show</p>
        <p>
          Got a show, event, activity or a great experience? Partner with us &
          get listed on BookMyShow
        </p>

        <a
          href=''
          className='ml-auto inline-block rounded bg-rose-500 px-5 py-2 hover:bg-rose-600 active:bg-rose-500'
        >
          Contact today!
        </a>
      </section>
    </footer>
  );
}

export default Footer;
