"use client";

import Header from "@/components/Header";
import StaffDashboard from "@/components/StaffDashboard";
import StudentDashboard from "@/components/StudentDashboard";
import useUser from "@/store/useUser";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const role = useUser((state) => state.role);

  if (!role) return redirect("/");
  return (
    <>
      <Header />
      {role === "staff" ? <StaffDashboard /> : <StudentDashboard />}
    </>
  );
};

export default Dashboard;
