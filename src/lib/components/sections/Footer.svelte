<script>
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
</script>

<IntersectionObserver
  {element}
  on:intersect={() => {
    window.umami.track("scroll_section_footer");
  }}
>
  <footer
    bind:this={element}
    class="h-[300px] flex flex-col justify-center items-center mt-[150px] bg-black dark:bg-darkSmoke text-white"
  >
    <div class="mx-auto px-[16px]">
      <p class="font-bold">Copyright © Sean Redmon</p>
      <p>Thanks to my close friend and colleague 纪丽瑶</p>
      <p class="underline mt-[32px]">Previous versions</p>
      <ul class="text-[14px]">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            data-umami-event="click_react_portfolio"
            class="hover:opacity-75"
            href="https://seanred-v-1-1-3-reactversion.netlify.app/"
            ><span>V1.1.3 seanred.io React version</span></a
          >
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            data-umami-event="click_next_portfolio"
            class="hover:opacity-75"
            href="https://sean-red-portfolio-nextjs-version.netlify.app/"
            ><span>V2.2.4 seanred.io Next.js version</span></a
          >
        </li>
      </ul>
    </div>
  </footer>
</IntersectionObserver>
