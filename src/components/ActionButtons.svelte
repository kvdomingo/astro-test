<script lang="ts">
  import LinkButton from "@/components/LinkButton.svelte";
  import { selectedAudio, selectedText, selectedVisual } from "@/lib/store.ts";
  import Button from "@/components/Button.svelte";

  let isValid: boolean;

  $: isValid = Boolean($selectedVisual && $selectedText && $selectedAudio);

  export let page: "visual" | "text-audio";
</script>

{#if page === "visual"}
  <LinkButton href="text-audio" class="mb-8" disabled={!$selectedVisual}>
    Next
  </LinkButton>
{:else}
  <LinkButton href="javascript:history.back()">Cancel</LinkButton>
  <Button class="mb-8" disabled={!isValid}>Download</Button>
{/if}
