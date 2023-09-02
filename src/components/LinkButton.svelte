<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import Button from "./Button.svelte";

  interface $$Props extends HTMLButtonAttributes {
    href: string;
    disabled?: boolean;
  }

  export let href: string;
  export let disabled: boolean | undefined = undefined;
</script>

<a href={disabled ? undefined : href}>
  <Button disabled={disabled ? true : undefined} {...$$restProps}>
    <slot />
  </Button>
</a>
