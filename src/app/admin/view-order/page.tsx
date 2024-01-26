import BackButton from "@/components/Admin/backButton";
import Container from "@/components/Admin/Container";
import AdminLayout from "@/components/Admin/layout";
import PaymentDetails from "./paymentDetails";
import OrderDetails from "./orderDetails";
import LaundaryDetails from "./laundaryDetails";
import CustomerNote from "./customerNote";
import LaundaryStatus from "./laundaryStatus";

export default function ViewOrder() {
  return (
    <AdminLayout>
      <Container className=" md:pl-[3.75rem] md:pr-[4.625rem] px-[2.5rem] pt-10 pb-7 bg-white">
        <BackButton text="Back" />
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-[1.3125rem] mt-8 font-poppins">
          <PaymentDetails />
          <OrderDetails />
          <LaundaryDetails />
          <CustomerNote />
          <LaundaryStatus />
        </div>
      </Container>
    </AdminLayout>
  );
}
