<script lang="ts">
  import { buildUrl } from "@/lib/image";
  import { selectedVisual } from "@/lib/store";

  export let src: string | null;

  const url = buildUrl(src ?? "");
</script>

<img
  src={url}
  loading="lazy"
  alt={`visual option ${src}`}
  crossorigin="anonymous"
  class="h-[200px] flex-shrink-0 cursor-pointer rounded-xl grayscale transition-all duration-300 ease-in-out hover:-translate-y-1 hover:brightness-110"
  on:click={() => selectedVisual.set(src)}
/>
