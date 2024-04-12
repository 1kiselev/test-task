import { computed, type Ref, ref, type ComputedRef } from "vue";
import type { TeamsArray } from "~/types";



interface PaginationConfig<T> {
  itemsPerPage?: Ref<number>;
  arrayToPaginate: ComputedRef<TeamsArray>;
  currentPage: Ref<number>;
}

export function usePagination<T>(config: PaginationConfig<T>) {
  const itemsPerPage = config.itemsPerPage || ref(100);
  const paginatedArray = computed(() =>
    config.arrayToPaginate.value.slice(
      (config.currentPage.value - 1) * itemsPerPage.value,
      config.currentPage.value * itemsPerPage.value
    )
  );

  const numberOfPages = computed(() =>
    Math.ceil((config.arrayToPaginate.value.length || 0) / itemsPerPage.value)
  );

  return {
    paginatedArray,
    numberOfPages
  };
}