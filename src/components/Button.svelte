<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { cn } from "@/lib/utils";

  interface $$Props extends HTMLButtonAttributes {
    disabled?: boolean;
  }
</script>

<button
  {...$$restProps}
  class={cn(
    "mr-2 cursor-pointer border-2 px-14 py-2",
    "bg-transparent text-sm uppercase leading-loose tracking-widest text-white",
    "transition-all duration-200 ease-in-out",
    "border-solid border-white",
    "hover:backdrop-brightness-[4]",
    "disabled:pointer-events-none disabled:opacity-50",
    $$restProps.class,
  )}
>
  <slot />
</button>
