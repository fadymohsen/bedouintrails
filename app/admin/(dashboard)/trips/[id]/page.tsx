import { notFound } from "next/navigation";
import { getTrapForAdmin } from "@/lib/services/adminTraps";
import { NotFoundError } from "@/lib/services/errors";
import { updateTrapAction, deleteTrapAction } from "../actions";
import TripEditTabs from "@/components/admin/trip-edit-tabs";
import styles from "@/components/admin/admin.module.scss";

export default async function EditTripPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tripId = Number(id);

  let trap;
  try {
    trap = await getTrapForAdmin(tripId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateTrapAction.bind(null, tripId);
  const boundDelete = deleteTrapAction.bind(null, tripId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{trap.nameEn}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Trip
          </button>
        </form>
      </div>

      <TripEditTabs
        tripId={tripId}
        updateAction={boundUpdate}
        initial={{
          nameEn: trap.nameEn,
          nameAr: trap.nameAr ?? "",
          nameI18n: (trap.nameI18n as Record<string, string>) ?? undefined,
          interfaceFromEn: trap.interfaceFromEn,
          interfaceFromAr: trap.interfaceFromAr ?? "",
          interfaceFromI18n: (trap.interfaceFromI18n as Record<string, string>) ?? undefined,
          interfaceToEn: trap.interfaceToEn,
          interfaceToAr: trap.interfaceToAr ?? "",
          interfaceToI18n: (trap.interfaceToI18n as Record<string, string>) ?? undefined,
          descriptionEn: trap.descriptionEn ?? "",
          descriptionAr: trap.descriptionAr ?? "",
          descriptionI18n: (trap.descriptionI18n as Record<string, string>) ?? undefined,
          duration: trap.duration,
          status: trap.status,
          metaTitle: trap.metaTitle ?? "",
          metaDescription: trap.metaDescription ?? "",
        }}
        days={trap.trapDays}
        images={trap.galleries}
      />
    </div>
  );
}
