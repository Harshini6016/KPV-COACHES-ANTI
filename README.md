# KPV COACHES – COMPLETE FRONTEND APPLICATION

**KPV COACHES** is a commercial vehicle management frontend application built exclusively with **HTML5, CSS3, and Vanilla JavaScript**.

Designed specifically for luxury coachbuilders, sleeper conversions, and commercial fleet overhaul facilities.

---

## 1. Design System

The application strictly adheres to the **Champagne Beige + Cream – Rich Luxury Style** design system:

| Colour Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Champagne Beige** | `#E8D8BD` | Secondary surfaces, badges, subtle accent cards |
| **Cream White** | `#FFF9F0` | Primary background, clean card canvas |
| **Soft Gold** | `#B89A70` | Primary luxury borders, active states, progress indicators |
| **Deep Brown** | `#493A2E` | High-contrast luxury headings, primary buttons |
| **Warm Ivory** | `#F2EBDD` | Elevated card surfaces, metric cards |
| **Charcoal** | `#292722` | Deep contrast panels, dark sidebar, text |

### Typography & Icons
- **Headings**: `'Cinzel'`, Georgia, serif (Classic luxury prestige)
- **Body UI**: `'Plus Jakarta Sans'`, sans-serif (Clean, readable modern UI)
- **Monospace**: `'JetBrains Mono'`, monospace (License plates, VIN, IDs)
- **Icons**: Lucide Icons (Loaded via CDN)

---

## 2. Application Architecture & Roles

The system features **three dedicated user roles**:

### 1. Administrator (`/admin/`)
- **Dashboard**: 6 Key Performance Indicator cards, vehicle service activities timeline, attendance summary, work progress snapshots.
- **Customers**: Add, edit, delete, search, view customer profile with lifetime billing spend and assigned vehicle.
- **Employees**: Master craftsmen directory, ID, phone, designation, department, and work status.
- **Vehicles**: Fleet registry, registration plate, coach make & model, service stage (1–6), completion targets, and priority.
- **Work Assignments**: Vehicle-to-craftsman task delegations with deadlines and completion toggles.
- **Attendance**: Daily shift records, Wi-Fi verification status, clock in/out timestamps, and a dedicated **Failed Attendance Security Audit Log** (SSID mismatch / cellular blocking).
- **Payments**: Financial ledger, total billed, revenue received, outstanding balance, record payment modal, and printable official receipt.

### 2. Employee / Master Craftsman (`/employee/`)
- **Dashboard**: Simple, clean, focused workbench with today's shift status, assigned vehicle count, and pending tasks.
- **Wi-Fi Attendance**:
  - Live digital clock with seconds.
  - Verification indicator for registered network: `KPV-COACHES-5G-SECURE`.
  - Clock In and Clock Out buttons with duplicate prevention and shift duration calculation.
  - Interactive **Simulate Network** dropdown allowing instant testing of Case 1 (Verified), Case 2 (Wrong Wi-Fi / Red Warning), and Case 3 (Mobile Data / Disabled).
- **My Vehicles / Assigned Work**: Detailed coach cards with work scope and quick-actions.
- **Work Photo Upload**:
  - Actual image file selection with **Take Photo** and **Upload from Gallery** buttons.
  - Drag-and-drop zone.
  - Pre-upload image preview grid with remove buttons.
  - Simulated animated upload progress bar.
  - Work update history cards with vehicle tags and craftsman timestamps.
- **Leave Requests**: Formal time-off applications with approval status tracking.
- **Salary Advance**: Zero-interest advance applications with repayment tenure selection.

### 3. Customer / VIP Fleet Patron (`/customer/`)
- **VIP Lounge**: Hero vehicle card, circular radial progress meter (`78%`), current service stage badge, and dedicated concierge advisor card.
- **6-Stage Vehicle Tracking**:
  1. *Vehicle Received* (Intake scan & signed inventory)
  2. *Inspection Started* (Subframe laser alignment & diagnostics)
  3. *Work In Progress* (30-berth sleeper conversion & starlight roof)
  4. *Quality Checking* (Acoustic noise test at 48 dB & water leak test)
  5. *Work Completed* (Ceramic lacquer bake & road trial)
  6. *Ready for Delivery* (VIP handover & documentation)
  - Interactive timeline showing completed, active (pulsing gold ring), and pending stages.
- **Work Progress & Photos**:
  - **Interactive Before & After Transformation Slider** (drag handle to see bare chassis transform into bespoke diamond-quilted VIP suite).
  - High-resolution photo gallery with modal zoom.
- **Vehicle Specs & Billing**: Coach technical specifications, payment ledger, and a **Printable Pro-Forma Invoice modal**.

---

## 3. Predefined Demo Accounts

Quick one-click login buttons are available directly on the login screen (`login.html`), or you can use these credentials:

| Role | Email | Password | Access Portal |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@kpvcoaches.com` | `admin` | Administrator Management Suite |
| **Employee** | `rajesh.kumar@kpvcoaches.com` | `emp` | Master Craftsman Workstation |
| **Customer** | `vikram.mehta@royaltravels.com` | `cust` | VIP Client Lounge |

*Note: For reviewer convenience, navigating directly to any dashboard automatically authenticates the respective demo session if not already logged in.*

---

## 4. How to Run

1. **VS Code Live Server**:
   - Open this folder in VS Code.
   - Right-click `index.html` and select **"Open with Live Server"**.
   - Browse seamlessly across all dashboards and screens.

2. **Apache Server**:
   - Drop the entire `KPV COACHES` folder into `htdocs` or `/var/www/html`.
   - Access via `http://localhost/KPV-COACHES/index.html`.

3. **Capacitor / Android Packaging**:
   - The application is built with standard web assets (`index.html`, `css/`, `js/`, `assets/`) and mobile-first responsive design.
   - Ready to be initialized with `@capacitor/core` and `@capacitor/cli` for Android APK generation without backend dependencies.

---

## 5. Project Directory Structure

```
KPV-COACHES/
│
├── index.html                  # Luxury showcase landing page & vehicle quick-tracker
├── login.html                  # 3-Role luxury authentication portal
├── README.md                   # Project documentation
│
├── admin/
│   ├── dashboard.html          # Executive metrics, recent customers & activities
│   ├── customers.html          # Customer CRUD, search & details modal
│   ├── employees.html          # Employee directory & department filtering
│   ├── vehicles.html           # Fleet management & 6-stage service selector
│   ├── assignments.html        # Coach-to-craftsman task delegations
│   ├── attendance.html         # Wi-Fi attendance ledger & security audit log
│   └── payments.html           # Billing summary, payments ledger & official receipt
│
├── employee/
│   ├── dashboard.html          # Technician workbench & today's shift snapshot
│   ├── attendance.html         # Wi-Fi attendance console with network simulator
│   ├── assigned-work.html      # Assigned coach work orders & status updates
│   ├── work-upload.html        # Actual photo picker, previews & progress upload
│   ├── leave.html              # Leave application form & approval history
│   └── salary-advance.html     # Salary advance application & repayment terms
│
├── customer/
│   ├── dashboard.html          # VIP patron lounge, hero vehicle & radial progress
│   ├── vehicle-tracking.html   # Visual 6-stage progress timeline with milestones
│   ├── work-progress.html      # Interactive Before & After slider + photo gallery
│   └── profile.html            # Coach blueprints, billing & pro-forma invoice
│
├── css/
│   ├── style.css               # Master Champagne Beige luxury design system
│   ├── login.css               # Split-screen luxury login styling & role cards
│   ├── admin.css               # Admin metrics, KPI grids, tables & badges
│   ├── employee.css            # Technician workstation, Wi-Fi widget & dropzone
│   └── customer.css            # VIP luxury showpiece styling, slider & radial meter
│
├── js/
│   ├── demo-data.js            # Comprehensive, realistic seed demo dataset
│   ├── storage.js              # Decoupled localStorage abstraction (Firebase ready)
│   ├── auth.js                 # Session management, guards & quick demo logins
│   ├── app.js                  # Modals, toasts, confirm dialogs, icons & navigation
│   ├── admin.js                # Admin CRUD operations, filters, metrics & receipts
│   ├── employee.js             # Employee workbench, assignments & leave requests
│   ├── attendance.js           # Wi-Fi attendance engine & network simulator
│   ├── upload.js               # Photo filepicker, FileReader previews & progress
│   └── customer.js             # 6-Stage tracker, Before/After slider & invoice modal
│
└── assets/
    ├── icons/
    │   ├── logo.svg            # KPV Coaches luxury gold crest monogram
    │   └── logo-dark.svg       # Dark variant crest
    └── images/
        ├── coach-mercedes.svg  # High-deck luxury Mercedes-Benz sleeper coach
        ├── coach-scania.svg    # Executive Scania intercity coach
        ├── coach-before.svg    # Stage 1: Bare stripped chassis fabrication
        ├── coach-after.svg     # Stage 6: Handcrafted diamond suite with starlight roof
        ├── avatar-admin.svg    # Admin avatar
        ├── avatar-emp.svg      # Master craftsman avatar
        └── avatar-cust.svg     # VIP patron avatar
```

