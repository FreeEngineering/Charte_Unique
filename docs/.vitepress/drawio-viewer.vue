<template>
  <div id="drawio-container"></div>
</template>

<script lang="ts">
import { mxgraph } from "mxgraph"; 
const { mxGraph, mxRubberband, mxKeyHandler, mxClient, mxUtils, mxEvent } = mxgraph;

export default {
  props: ['src'],
  mounted() {
    fetch(this.src)
      .then((response: Response) => response.text())
      .then((data: string) => {
        let container: HTMLElement | null = document.getElementById('drawio-container');
        if (container) {
          let graph = new mxGraph(container);
          let xml = mxUtils.parseXml(data);
          let codec = new mxCodec(xml);
          codec.decode(xml.documentElement, graph.getModel());
        }
      });
  }
}
</script>
