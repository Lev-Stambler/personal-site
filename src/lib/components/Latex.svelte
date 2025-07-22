<script lang="ts">
  import katex from 'katex';

  export let tex: string;

  let html: string;
  $: {
    try {
      html = katex.renderToString(tex, {
        displayMode: true, // for $$...$$ style
        throwOnError: false,
      });
    } catch (e) {
      console.error(e);
      html = (e as Error).message;
    }
  }
</script>

<span {@html html}></span>