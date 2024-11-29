import React, { useEffect } from "react";
import Layout from "../../Layout"

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import ListTenagaPendidikPaludi from "../../../component/Paludi/SekolahPaludi/ListTenagaPendidikPaludi";

const ListTenagaKependidikanPaludiPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError || user?.hakAkses?.pantai_disa === false) {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <ListTenagaPendidikPaludi />
    </Layout>
  );
};

export default ListTenagaKependidikanPaludiPage;
