import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./ProductService";
// import Example from "../NewTable/Table";

export default function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section id="table">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Ranking Table
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Explore the top-ranked items in our Ranking Table.
          </p>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="card">
            <DataTable
              value={products}
              sortMode="multiple"
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="code"
                header={<p className="text-lg">"Code"</p>}
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="name"
                header={<p className="text-lg">"Name"</p>}
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="category"
                header={<p className="text-lg">"Category"</p>}
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="quantity"
                header={<p className="text-lg">"Quantity"</p>}
                sortable
                style={{ width: "25%" }}
              ></Column>
            </DataTable>
          </div>
        </div>
      </section>
      {/* <Example /> */}
    </>
  );
}
