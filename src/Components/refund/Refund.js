import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container pt-5 pb-5 terms_content Nav_overflow">
        <h1>GHURI RETURN AND REFUND POLICY</h1>
        <h2>Return & Refund Policy (GHURI PARCEL & BAZAR)</h2>
        <p>
          <strong>Reasons to return an item:</strong>
        </p>
        <ol>
          <li>Damaged / Faulty Item.</li>
          <li>Item received is damaged or doesn't work properly.</li>
          <li>Expired Item: Item received is expired.</li>
          <li>
            Item does not match description/pictures: Item received does not
            match what was shown in the online product listing.
          </li>
          <li>
            Received wrong Item: Item delivered is different from what was
            ordered.
          </li>
          <li>
            Counterfeit items: Item delivered appears to be fake or unauthentic.
          </li>
          <li>
            Missing accessories/freebies: Package delivered is missing
            accessories or freebies.
          </li>
          <li>
            Incomplete/Missing: item Package delivered is incomplete or missing
            essential items.
          </li>
          <li>Please note that selected items are not eligible for return.</li>
          <ul>
            <li>
              Custom made items, women’s intimate apparel and men’s innerwear
              cannot be returned
            </li>
            <li>Movies and Music cannot be returned</li>
            <li>All software products.</li>
            <li>Custom made items cannot be returned</li>
            <li>
              All items of beauty & health category, except for hair removal and
              other electrical items
            </li>
            <li>All grocery items</li>
            <li>All pet products</li>
            <li>All digital goods.</li>
          </ul>
          <p>
            If you have received a non-returnable item that is defective /
            damaged or incorrect / incomplete, please contact us within 3 days
            of delivery.
          </p>
          <li>
            Change of mind is not acceptable at all. But For selected
            categories, we accept a change of mind: Men’s Fashion, Women’s
            Fashion, Men’s bags, Women’s bags, Luggage & Suitcase, Bedding, and
            Bath. Exceptions are women's intimate apparel, men's innerwear,
            swimwear, eyewear, jewellery, watches, duffel bags, and shoe-care.
          </li>
          <li>
            Package Not Received : If your order is tagged as delivered but you
            didn't receive a package
          </li>
          <li>
            Empty Package/Fraudulent: item If you received an empty package or
            filler items
          </li>
        </ol>
        <p>
          <strong>Conditions for Return</strong>
        </p>
        <ol>
          <li>
            The product must be unused, unworn, unwashed and without any flaws.
            Fashion products can be tried on to see if they fit and will still
            be considered unworn
          </li>
          <li>
            The product must include the original tags, user manual, warranty
            cards, freebies and accessories
          </li>
          <li>
            The product must be returned in the original and undamaged
            manufacturer packaging / box. If the product was delivered in a
            second layer of GHURI packaging, it must be returned in the same
            condition with return shipping label attached. Do not put tape or
            stickers on the manufacturer’s box
          </li>
          <li>
            For device related issues after usage or the expiration of the
            return window, seller warranty or brand warranty could be given by
            the seller. For seller warranty, please contact the seller. The
            contact details of the seller can be found on the invoice. For brand
            warranty, please refer to contact the Brand.
          </li>
          <li>
            When selecting a return reason, it's important to select the correct
            return reason and add additional details in the Online Return Form
            for a faster and more accurate evaluation of the request. Returns
            may be rejected when the request is non-compliant with the policy.
          </li>
        </ol>
        <p>
          <strong>Invalid refund/return reasons:</strong>
        </p>
        <ul>
          <li>
            Change of mind: The buyer suddenly decides they don't want/need the
            item received{" "}
          </li>
          <li>
            The product received does not meet buyer expectations, but is
            exactly as described on the product page: The buyer failed to read
            the product page and is disappointed with the item received{" "}
          </li>
        </ul>
        <p>
          If a product is returned to us in an inadequate condition, we reserve
          the right to send it back to you.
        </p>
        <p>
          <strong>How to Request for Return</strong>
        </p>
        <ul>
          <li>Open GHURI App, and then click on the history & select order.</li>
          <li>Click on Items that you wanted to return.</li>
          <li>Fill in the Return Form carefully.</li>
          <li>
            Pack your return parcel securely, with the product in the original
            and undamaged manufacturer’s packaging as delivered to you and
            secure the invoice that came with the parcel.
          </li>
          <li>
            If you are located in between Dhaka Metropolitan area, then we will
            be able to give a free pickup facility for you.
          </li>
        </ul>
        <p>
          <strong>Issuance of Refunds</strong>
        </p>
        <p>
          The shipping fee is refunded along with the amount paid for your
          returned product. If your product is eligible for a refund, you can
          choose your preferred refund method as per the following table:
        </p>
        <Table striped bordered hover className="refund_table" size="sm">
          <thead>
            <tr>
              <th>Payment Methods</th>
              <th>Refund Option</th>
              <th>Refund time (working days)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All</td>
              <td>Refund Voucher</td>
              <td>7-15</td>
            </tr>
            <tr>
              <td>Debit or Credit Card</td>
              <td>Debit or Credit Card Payment Reversal</td>
              <td>15-30</td>
            </tr>
            <tr>
              <td>bKash</td>
              <td>Bank Deposit / Mobile Payment Reversal</td>
              <td>15-30</td>
            </tr>
            <tr>
              <td>Cash on Delivery (COD)</td>
              <td>Bank Deposit</td>
              <td>15-30</td>
            </tr>
            <tr>
              <td>GHURI Voucher</td>
              <td>Refund Voucher</td>
              <td>7-15</td>
            </tr>
          </tbody>
        </Table>
        <ol>
          <li>
            Once we have received your request for a return it will undergo a
            process, from pick-up to quality check and validation. The whole
            refund process may take at least 15-30 business days depending on
            the refund method you have selected.
          </li>
          <li>
            The refund Voucher code can be applied multiple times (if the value
            of order is smaller than voucher value). The leftover amount of the
            refund voucher can be used for the next purchase.
          </li>
          <li>
            If your product is not eligible for a refund after our quality
            control check, we will send back the item to you, free of cost
            within 7-15 business days from the date of the return submitted.
          </li>
        </ol>
        <p>
          <strong>Category wise Return-Refund Policy</strong>
        </p>
        <p>
          <strong>Electronics Product: </strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
          <li>
            For device-related issues after usage please contact the brand
            warranty provider directly (if applicable).
          </li>
        </ul>
        <p>
          <strong>For Fashion & Lifestyle Product</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
        </ul>
        <p>
          <strong>Beauty, Personal Care & Health products </strong>
        </p>
        <ul>
          <li>Non-returnable.</li>
        </ul>
        <p>
          <strong>For Hair Removal & Electronic Accessories</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
          <li>
            For device-related issues after usage please contact the brand
            warranty provider directly (if applicable).
          </li>
        </ul>
        <p>
          <strong>Appliances</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
          <li>
            For device-related issues after usage please contact the brand
            warranty provider directly (if applicable).
          </li>
        </ul>
        <p>
          <strong>Watches, Sunglasses and Jewelry</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
        </ul>
        <p>
          <strong>TV, Audio / Video, Gaming & Wearable</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
        </ul>
        <p>
          <strong>Home & Living</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued
          </li>
        </ul>
        <p>
          <strong>Digital Goods</strong>
        </p>
        <ul>
          <li>Non-returnable</li>
        </ul>
        <p>
          <strong>Grocery Shop</strong>
        </p>
        <ul>
          <li>Non-returnable</li>
        </ul>
        <p>
          <strong>Baby, Toys & Kids</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>Not eligible for return if the item is"No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
        </ul>
        <p>
          <strong>Furniture</strong>
        </p>
        <ul>
          <li>Non-returnable</li>
        </ul>
        <p>
          <strong>Pet products</strong>
        </p>
        <ul>
          <li>Non-returnable</li>
        </ul>
        <p>
          <strong>Digital Goods</strong>
        </p>
        <ul>
          <li>Non-returnable</li>
        </ul>
        <p>
          <strong>Computers, Laptops, Gaming & Software</strong>
        </p>
        <ul>
          <li>3 Days; Return and refund</li>
          <li>
            Laptops, Certified Refurbished Laptops, Components, Processors,
            Projectors, Storage, Printers, Scanners, Headsets, Headphones,
            Speakers, Consoles & PC / Video Games
          </li>
          <li>
            Software is Non-returnable. For software-related technical issues or
            installation issues in items belonging to the software category,
            please contact the brand directly.
          </li>
          <li>Not eligible for return if the item is “No longer needed"</li>
          <li>
            If your item arrived in defective / damaged or incorrect /
            incomplete condition, a refund will be issued.
          </li>
          <li>
            For device-related issues after usage please contact the brand
            warranty provider directly (if applicable).
          </li>
        </ul>
        <h2>Refund Policy (GHURI RIDE)</h2>
        <p>
          <strong>Trip Refund Condition:</strong>
        </p>
        <p>
          <strong>Paid extra cash To Driver</strong>
        </p>
        <p>
          Please check your total fare that is displayed at the end of the trip
          in your GHURI App. This screen shows the amount a driver should
          collect. If they are asking for cash more than the amount displayed on
          this screen, do let us know using report option in your GHURI app. In
          case this was a non-cash trip, a driver-partner should never ask for
          extra cash.
        </p>
        <p>
          <strong>Fare was too high than the initial fare </strong>
        </p>
        <p>
          Before you request a trip, an upfront fare is calculated using the
          expected time and distance of the trip and local traffic, as well as
          how many riders and nearby drivers are using GHURI at that moment. You
          may be charged a different amount than your upfront fare in case the
          route deviates from the predicted route. If you feel you were
          overcharged please report it using your GHURI app. We’ll look into it.
        </p>
        <p>
          <strong>Driver made unplanned or unrequested stop</strong>
        </p>
        <p>
          Trip fares are calculated by time and distance. When you're on a trip
          and your driver made unplanned or unrequested stops along the way to
          increase your fare or travel time, please report it using your GHURI
          app. We’ll look into it.
        </p>
        <p>
          <strong>Cancellation fee</strong>
        </p>
        <p>
          You may be charged a cancellation fee if you cancel a trip after you
          is matched with a driver. These fees pay driver-partners for the time
          and effort they spend getting to your location. Drivers are also able
          to cancel a ride request if they've waited a certain amount of time at
          the pickup location. You may be charged a cancellation fee, in this
          case, to reimburse your driver for their time.
        </p>
        <h2>Cancellation & Refund Policy (GHURI TICKET)</h2>
        <p>
          <strong>(Bus, Launch & Air)</strong>
        </p>
        <p>
          Thanks for purchasing your ticket at <strong>GHURI</strong> operated
          by <strong>GHURI Express Ltd</strong>. In case the fault is of the
          operator or from our side, we refund the seat's price to our esteemed
          users. This price however does not include the Convenience fee. The
          money will be refunded to the original payment method you’ve used
          during the purchase. For debit/credit card payments it may take 10 to
          15 business days for a refund to show up on your debit/credit card
          statement. Refund will be made on tickets that are cancelled on time.
          For any other reason we are not liable to refund. After we receive
          your request, our team of professionals will inspect it and process
          your refund. However, if refund request is complex which requires
          validation from bus, launch & air operators and accuracy of complain,
          the refund can take 30 working days.
        </p>
        <p>Notes:</p>
        <ul>
          <li>
            The Ticket will be automatically cancelled if the passenger fails to
            report at the boarding station 20 minutes before scheduled departure
            time. In such cases, our operator’s opinion will be counted as
            final. No ticket will be activated unless the customer has paid the
            full amount mentioned on the screen.
          </li>
          <li>
            Any kind of ticket cancellation might not be allowed during Public
            Holidays journey as per Launch company decision.
          </li>
          <li>
            EID NOTICE: EID TICKETS ARE NON REFUNDABLE AND CAN NOT BE CHANGED.
          </li>
        </ul>

        <p>
          <strong>
            If you have any additional questions or would like to request a
            refund, feel free to contact us.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Refund;
