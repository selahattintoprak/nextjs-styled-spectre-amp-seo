import Quotes from "../components/Quotes/Quotes";
import ClientPage from "../components/ClientPage/ClientPage";

export const config = { amp: true };
export default () => (
  <>
    <ClientPage title="Moving Deals" description="Compare Moving Deals & Quotes">
        <section className="quotes">
          <h1>Book your move online</h1>
        </section>
    </ClientPage>
  </>
);
