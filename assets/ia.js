/* =============================================================================
   MIMS — Information Architecture (single source of truth)
   -----------------------------------------------------------------------------
   All three prototypes (A / B / C) render their menus from THIS file, so the
   structure stays identical across the test. Only the navigation *paradigm*
   differs between prototypes.

   Manager `type`:
     "grouped" -> categories -> items   (dropdown / mega-menu / flyout + stub)
     "tabs"    -> flat list of tab items (secondary tab row + stub)

   ⚠️  VERIFY: Configuration is taken verbatim from the Figma mega-menu frame and
   is exact. Every OTHER manager below is a best-effort reading of the IA
   spreadsheet image and must be checked against the source before testing.
   ============================================================================= */

const MIMS_IA = {
  managers: [
    {
      id: "profile",
      name: "Profile",
      drawerName: "Profile Manager",
      type: "grouped",
      categories: [
        { name: "Client", items: ["Profile", "Contacts", "Product Rules", "Inwards", "Orders", "Debit Advice - Template", "Debit Advice - Function", "Picking", "EDI", "Delete", "Consignee Groups", "Product Categories"] },
        { name: "Product", items: ["Profile", "Pack Sizes", "Dangerous Goods", "HSNO/GHS", "Pick Face", "Multi Warehouse", "Products Extra", "Kitsets", "Delete", "Product QI"] },
        { name: "Retailer", items: ["Retailer"] },
        { name: "Consignee", items: ["Profile", "Delete"] },
        { name: "Company", items: ["Company"] },
        { name: "Freman", items: ["Charge Code", "Sender Code"] },
        { name: "Freight Rating", items: ["Carrier", "Service"] },
        { name: "Hire Account", items: ["Hire Account"] },
        { name: "Service Level", items: ["Service Level"] }
      ]
    },
    {
      id: "configuration",
      name: "Configuration",
      drawerName: "Configuration Manager",
      type: "grouped",
      // EXACT — verbatim from the Figma mega-menu frame.
      categories: [
        { name: "Security Setup", items: ["Concurrency Lock"] },
        { name: "Warehouse Setup", items: ["Profile", "Rows", "Areas", "Service Level", "Voice Devices", "Bays", "Carousel Management", "Zones", "Checklist Setup", "Dangerous Goods Group", "Integration Setup", "Pick Grouping Settings", "Carrier Selection Rules"] },
        { name: "Parameter Setup", items: ["General Codes", "System Codes", "Printer Router", "Import Data", "Print Queue", "Custom Status Setup"] },
        { name: "Process Setup", items: ["EDI Process Groups"] }
      ]
    },
    {
      id: "reporting",
      name: "Reporting",
      drawerName: "Reporting Manager",
      type: "grouped",
      categories: [
        { name: "Standard Reports", items: ["Standard Reports"] },
        { name: "User Defined Reports", items: ["User Defined Reports"] }
      ]
    },
    {
      id: "enquiry",
      name: "Enquiry",
      drawerName: "Enquiry Manager",
      type: "grouped",
      categories: [
        { name: "Dockets", items: ["Dockets"] },
        { name: "Stock On Hand", items: ["Stock On Hand"] },
        { name: "Stock History", items: ["Stock History"] },
        { name: "Location History", items: ["Location History"] },
        { name: "Stock Held By Transaction", items: ["Stock Held By Transaction"] }
      ]
    },
    {
      id: "ops-inbound",
      name: "Operations (Inbound)",
      drawerName: "Operations Manager (Inbound)",
      type: "tabs",
      tabs: ["Inbound Management", "Inwards", "Inwards Tracking"]
    },
    {
      id: "ops-outbound",
      name: "Operations (Outbound)",
      drawerName: "Operations Manager (Outbound)",
      type: "tabs",
      tabs: ["Enter Order", "Pick Orders", "Outstanding Picks", "Confirm Orders", "Consolidate Orders", "Manifests", "Adjustment", "Transfer", "Stock Take", "Stock Management", "Inventory Status", "Replenishment", "Smart Replenishment"]
    },
    {
      id: "edi",
      name: "EDI",
      drawerName: "EDI Manager",
      type: "grouped",
      categories: [
        { name: "Inbound", items: ["Processed Files"] },
        { name: "Outbound", items: ["Processed Files", "Errors"] },
        { name: "Errors", items: ["Errors"] }
      ]
    },
    {
      id: "pulse",
      name: "Pulse",
      drawerName: "Pulse",
      type: "tabs",
      tabs: ["Summary", "PutWall", "Team Performance", "Customer Order Details", "Order Summary", "Other Widgets"]
    },
    {
      id: "administration",
      name: "Administration",
      drawerName: "Administration Manager",
      type: "grouped",
      categories: [
        { name: "Debit Advice", items: ["Progress", "Invoice Tracking", "Data Entry", "Finance Pulse"] },
        { name: "Credit Advice", items: ["Credit Tracking", "Misc Charge"] }
      ]
    }
  ]
};

/* ---- helpers shared by all prototypes ------------------------------------ */
function iaSlug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function iaManager(id) {
  return MIMS_IA.managers.find(m => m.id === id) || null;
}
