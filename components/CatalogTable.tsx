import { Fragment } from 'react';
import { catalog } from '@/content/catalog';
import HairlineRule from './HairlineRule';

export default function CatalogTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr>
            <th className="text-left text-xs tracking-widest text-inkFaint font-normal pb-3 pr-6">Plate</th>
            <th className="text-left text-xs tracking-widest text-inkFaint font-normal pb-3 pr-6">Building</th>
            <th className="text-left text-xs tracking-widest text-inkFaint font-normal pb-3 pr-6">City / State</th>
            <th className="text-left text-xs tracking-widest text-inkFaint font-normal pb-3 pr-6">Year</th>
            <th className="text-left text-xs tracking-widest text-inkFaint font-normal pb-3 pr-6">Architect</th>
            <th className="text-left text-xs tracking-widest text-inkFaint font-normal pb-3">Status</th>
          </tr>
          <tr>
            <td colSpan={6} className="pb-2">
              <HairlineRule />
            </td>
          </tr>
        </thead>
        <tbody>
          {catalog.map((plate, i) => (
            <Fragment key={plate.id}>
              <tr>
                <td className="py-3 pr-6 text-inkFaint">{plate.id}</td>
                <td className="py-3 pr-6 text-ink font-serif font-normal">{plate.name}</td>
                <td className="py-3 pr-6 text-inkSoft">{plate.city}, {plate.state}</td>
                <td className="py-3 pr-6 text-inkSoft">{plate.yearOpened}</td>
                <td className="py-3 pr-6 text-inkSoft italic">{plate.architect}</td>
                <td className={`py-3 text-xs tracking-widest uppercase ${plate.status === 'in production' ? 'text-ink' : 'text-inkFaint'}`}>
                  {plate.status}
                </td>
              </tr>
              {i < catalog.length - 1 && (
                <tr>
                  <td colSpan={6}>
                    <HairlineRule />
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
