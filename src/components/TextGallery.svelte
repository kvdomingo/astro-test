<script lang="ts">
  import { memberIndex } from "@/lib/constants.ts";
  import type { Member } from "@/types/member.ts";
  import { buildUrl } from "@/lib/image.ts";
  import { selectedText } from "@/lib/store.ts";

  export let member: Member;

  const textWhite = Array(6)
    .fill("")
    .map((_, i) => `Photocard_Text_${memberIndex[member]}_${i + 1}_w.png`);

  const textBlack = Array(6)
    .fill("")
    .map((_, i) => `Photocard_Text_${memberIndex[member]}_${i + 1}_b.png`);

  function handleClick(src: string) {
    selectedText.set(src);
  }

  function handleKeyPress(event: KeyboardEvent, src: string) {
    if (event.key === "Enter" || event.key === " ") handleClick(src);
  }
</script>

<div class="mb-6">
  <h3 class="my-2 text-2xl">TEXT</h3>
  <hr class="text-white" />
  <div class="grid grid-cols-6 gap-4 py-4">
    {#each textWhite as txt, i}
      {@const src = `${member}/${txt}`}
      <span
        role="button"
        tabindex={i}
        on:click={() => handleClick(src)}
        on:keypress={e => handleKeyPress(e, src)}
      >
        <img
          crossorigin="anonymous"
          alt={`text option ${txt}`}
          src={buildUrl(src)}
          class="w-full cursor-pointer border border-solid border-white bg-[#080808]"
        />
      </span>
    {/each}

    {#each textBlack as txt, i}
      {@const src = `${member}/${txt}`}
      <span
        role="button"
        tabindex={i}
        on:click={() => handleClick(src)}
        on:keypress={e => handleKeyPress(e, src)}
      >
        <img
          crossorigin="anonymous"
          alt={`text option ${txt}`}
          src={buildUrl(src)}
          class="w-full cursor-pointer bg-white"
        />
      </span>
    {/each}
  </div>
</div>
