<script lang="ts">
  import { audioText } from "@/lib/constants.ts";
  import { selectedAudio } from "@/lib/store.ts";

  const audio = Array(7)
    .fill("")
    .map((_, i) => `auditory_${i}_${audioText[i]}.mp3`);
</script>

<div class="mb-6">
  <h3 class="my-2 text-2xl">AUDITORY</h3>
  <hr class="text-white" />
  <div class="grid grid-cols-7 gap-4 py-4">
    {#each audio as au, i}
      <div
        role="button"
        tabindex={0}
        class="flex aspect-square cursor-pointer place-content-center place-items-center border-2 border-solid p-2 text-center shadow-none"
        class:border-blue-500={au === $selectedAudio}
        on:click={() => selectedAudio.set(au)}
        on:keypress
      >
        <p>{audioText[i].toUpperCase().replace(/_/g, " ")}</p>
      </div>
    {/each}
  </div>
</div>
