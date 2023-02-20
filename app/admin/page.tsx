import { memo } from "react";
import { redirect } from "next/navigation";

import { AdminPageType } from "./types";

const AdminPage: AdminPageType = () => {
    return redirect("/admin/call-manager");
};
export default memo(AdminPage);
