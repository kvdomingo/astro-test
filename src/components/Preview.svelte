<script lang="ts">
  import { selectedAudio, selectedText, selectedVisual } from "@/lib/store";
  import { buildUrl } from "@/lib/image.ts";
  import { GS_URL } from "@/lib/constants.ts";
  import { onMount, onDestroy } from "svelte";

  export let member: string;

  let isAudioPlaying = false;
  let audio: HTMLAudioElement | null;
  let audioSrc: string | undefined;

  $: {
    audioSrc = member ? `${GS_URL}/${member}/${$selectedAudio}` : undefined;
    isAudioPlaying = false;
  }

  onMount(() => {
    if (window.location.pathname.endsWith("text-audio") && !$selectedVisual) {
      window.location.replace("visual");
    }

    audio = document.querySelector("audio");
    audio?.addEventListener("ended", () => (isAudioPlaying = false));
  });

  onDestroy(() => {
    audio?.removeEventListener("ended", () => (isAudioPlaying = false));

    selectedVisual.set(null);
    selectedText.set(null);
    selectedAudio.set(null);
  });

  function handleClick() {
    if (isAudioPlaying) audio?.pause();
    else audio?.play();
    isAudioPlaying = !isAudioPlaying;
  }
</script>

<div class="relative z-0">
  {#if $selectedVisual}
    {#if $selectedVisual?.includes("Moving")}
      <video
        src={buildUrl($selectedVisual)}
        class="w-full"
        crossorigin="anonymous"
        loop
        muted
        autoplay
        playsinline
      />
    {:else}
      <img
        src={buildUrl($selectedVisual)}
        alt="selected visual"
        class="w-full"
        crossorigin="anonymous"
      />
    {/if}
  {/if}

  {#if $selectedText}
    <img
      src={buildUrl($selectedText)}
      alt="selected text"
      class="absolute left-0 top-0 w-full"
      crossorigin="anonymous"
    />
  {/if}

  {#if $selectedAudio}
    <div class="absolute bottom-0 left-0">
      <button
        on:click={handleClick}
        class="cursor-pointer border-none bg-transparent text-white opacity-75"
      >
        {#if isAudioPlaying}
          <img src="/pause.svg" alt="pause" height={100} width={100} />
        {:else}
          <img src="/play.svg" alt="play" height={100} width={100} />
        {/if}
      </button>
    </div>
  {/if}

  <audio preload="auto" crossorigin="anonymous" src={audioSrc} />
</div>
