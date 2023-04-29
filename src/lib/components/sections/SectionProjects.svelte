<script>
  export let projects;
  import {
    currentLanguage,
    scrollLock,
    modalProps,
    modalType,
  } from "$lib/stores";
  import IntersectionObserver from "svelte-intersection-observer";

  let element;

  const handleClickProject = (project) => {
    scrollLock.toggle();
    modalProps.set(project);
    modalType.set("project");
    umami.track(`click_project_${project.title["en"]}`);
  };
</script>

<IntersectionObserver
  {element}
  on:intersect={() => {
    window.umami.track("scroll_section_projects");
  }}
>
  <section bind:this={element} class="max-w-[1200px] mx-auto">
    <h2>Projects</h2>
    <ul class="flex flex-wrap justify-center items-center gap-[32px]">
      {#each projects as project}
        <li class="rounded-xl border-black dark:border-smoke border-2 group">
          <button
            data-umami-event={`click_project_${project.title["en"]}`}
            class="p-[12px] bg-white dark:bg-darkSmoke transition-all group-hover:rotate-[-15deg] origin-bottom-left cursor-pointer"
            on:click={() => handleClickProject(project)}
          >
            <video class="w-[320px]" src={project.preview} autoplay muted loop>
              <track kind="captions" /></video
            >
            <p
              class="w-[100px] mx-auto bg-black dark:bg-smoke rounded-bl-lg rounded-br-lg text-center text-white"
            >
              {project.startDate}
            </p>
            <p
              class="my-[16px] text-black dark:text-white text-center font-bold text-[24px]"
            >
              {project.title[$currentLanguage]}
            </p>
          </button>
        </li>
      {/each}
    </ul>
  </section>
</IntersectionObserver>
