import WorkPreviewPage from '@/components/WorkPreviewPage';
import { getWorkPreview, workPreviews } from '@/lib/workPreviews';

const work = getWorkPreview('wrigley-field');

export const metadata = {
  title: 'Wrigley Field — Quoin',
  description: 'Product page study for a Quoin architectural print edition.',
};

export default function WrigleyFieldPage() {
  if (!work) return null;
  return <WorkPreviewPage work={work} otherPrints={workPreviews.filter((item) => item.slug !== work.slug)} />;
}
