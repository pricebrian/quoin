import WorkPreviewPage from '@/components/WorkPreviewPage';
import { getWorkPreview, workPreviews } from '@/lib/workPreviews';

const work = getWorkPreview('yankee-stadium');

export const metadata = {
  title: 'Original Yankee Stadium — Quoin',
  description: 'Product page study for a Quoin architectural print edition.',
};

export default function YankeeStadiumPage() {
  if (!work) return null;
  return <WorkPreviewPage work={work} otherPrints={workPreviews.filter((item) => item.slug !== work.slug)} />;
}
