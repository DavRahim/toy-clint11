import React from "react";
import useTitle from "../hooks/useTitle";

const Question = () => {
  useTitle("Blog");
  return (
    <div className="w-11/12 m-auto max-sm:px-4">
      <h1 className="font-bold text-2xl mb-4 text-center py-5">
        Question Answer
      </h1>

      <div className="card w-full bg-base-100 shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q1. What is an access token and refresh token?
        </h1>
        <div className="card-body pt-3">
          <p>
            What is an access token and refresh token?: A refresh token just
            helps you re-validate a user without them having to re-enter their
            login credentials multiple times. The access token is re-issued,
            provided the refresh token is a valid one requesting permission to
            access confidential resources. This method provides an enhanced user
            experience all while keeping a robust security interface.
          </p>
          <p>
            his assumes that my client application knows about the refresh
            token, because I need it to request a new access token if no user
            credentials (e.g. email/password) are present. My question: Where do
            I store the refresh token in my client-side application? There are
            lots of questions/answers about this topic on SO, but regarding the
            refresh token the answer are not clear. Access token and refresh
            token shouldn't be stored in the local/session storage, because they
            are not a place for any sensitive data. Hence I would store the
            access token in a httpOnly cookie (even though there is CSRF) and I
            need it for most of my requests to the Resource Server anyway.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q2. Compare SQL and NoSQL databases?
        </h1>
        <div className="card-body pt-3">
          <p>
            1. SQL databases are relational, and NoSQL databases are
            non-relational. <br /> 2.SQL databases use structured query language
            (SQL) and have a predefined schema. NoSQL databases have dynamic
            schemas for unstructured data. <br /> 3.SQL databases are vertically
            scalable, while NoSQL databases are horizontally scalable. <br /> 4.
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores. <br /> 5.SQL databases are
            better for multi-row transactions, while NoSQL is better for
            unstructured data like documents or JSON.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q3. What is express js.?
        </h1>
        <div className="card-body pt-3">
          <p>
            Express.js is the most popular web framework for Node.js. It is
            designed for building web applications and APIs and has been called
            the de facto standard server framework for Node.js. Building a
            backend from-scratch for an application in Node.js can be tedious
            and time consuming. From setting up ports to route handlers, writing
            all of the boilerplate code takes away from what really matters,
            which is writing the business logic for an application. By using web
            frameworks like Express.js, developers can save time and focus on
            other important tasks. To learn more about Express and what it can
            do, visit the official website.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q4. What is Nest JS.?
        </h1>
        <div className="card-body pt-3">
          <p>
            NestJS is a popular open-source, back-end framework for Node.js and
            TypeScript-based, server-side applications. It is intended to
            provide a solid foundation for developing server-side applications
            by leveraging well-known patterns and the best practices from other
            frameworks such as Angular, Express.js, and others.
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl mt-4 py-4">
        <h1 className="text-center font-bold text-2xl mb-4">
          Q4. What is MongoDB aggregate and how does it work.?
        </h1>
        <div className="card-body pt-3">
          <p>
            MongoDB Aggregation uses an aggregate() method to perform the
            aggregation operations. Basically, this aggregation operation
            practices data records and provides calculated results. The
            aggregation operations assemble values from various documents
            together and are able to execute a range of operations, such as
            average, sum, maximum, minimum, etc., on the assembled data to
            provide only a result. A corresponding of MongoDB Aggregation in SQL
            is count(*) and with the group by. MongoDB Aggregation is identical
            to the aggregate function provided in SQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
