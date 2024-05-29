import React, { useState } from "react";
import { Layout, theme } from "antd";
import Header from "../components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

const { Content } = Layout;

const DefaultLayout: React.FC = () => {
  const {
    token: {},
  } = theme.useToken();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isCreateBlogs = location.pathname.includes("/create-blogs");

  return (
    <Layout className="min-h-[100vh] bg-white">
      {!isCreateBlogs && (
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}

      <Layout
        className={`${!isCreateBlogs && "p-4"} bg-white w-full flex-grow`}
      >
        <Content className="flex flex-col min-h-[calc(100vh-60px)]">
          <main className="flex-grow overflow-auto">
            <div>
              <Outlet />
            </div>
          </main>
        </Content>
      </Layout>
      {!isCreateBlogs && <Footer />}
    </Layout>
  );
};

export default DefaultLayout;
