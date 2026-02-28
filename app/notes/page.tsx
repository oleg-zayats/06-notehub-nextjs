
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

const PER_PAGE = 12;

export default async function NotesPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string; search: string }>;
}) {
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const search = params.search || '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', page, search],
    queryFn: () => fetchNotes({ page, perPage: PER_PAGE, search }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialPage={page} initialSearch={search} />
    </HydrationBoundary>
  );
}