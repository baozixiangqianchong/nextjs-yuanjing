import AppHeader from "../shared/AppHeader";
// import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";
import AppFooterCopyright from "../shared/AppFooterCopyright";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      {/* <AppFooter /> */}
      <div className="pt-4 sm:pt-30 pb-8 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
        <AppFooterCopyright />
      </div>
    </>
  );
};

export default DefaultLayout;
