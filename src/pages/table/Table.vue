<template>
    <div>
        <h1 class="onv-page-title">Table</h1>
        <p class="onv-page-subtitle">Komponen table yang fleksibel dan responsive untuk menampilkan data tabular dengan berbagai styling dan fitur.</p>

        <!-- Basic Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Basic Table</h2>
            <p class="onv-section-description">Table dasar dengan styling yang clean dan modern.</p>
            <div class="onv-demo-grid">
                <table class="onv-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Frontend Developer</td>
                            <td>john.doe@example.com</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>UI/UX Designer</td>
                            <td>jane.smith@example.com</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Mike Johnson</td>
                            <td>Backend Developer</td>
                            <td>mike.johnson@example.com</td>
                            <td>Inactive</td>
                        </tr>
                        <tr>
                            <td>Sarah Wilson</td>
                            <td>Product Manager</td>
                            <td>sarah.wilson@example.com</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Table Variants -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Table Variants</h2>
            <p class="onv-section-description">Berbagai varian table untuk kebutuhan tampilan yang berbeda.</p>
            
            <!-- Striped Table -->
            <h3 class="onv-subsection-title">Striped Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Laptop Gaming</td>
                            <td>$1,299</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mouse Wireless</td>
                            <td>$29</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Keyboard Mechanical</td>
                            <td>$89</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Monitor 4K</td>
                            <td>$399</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Bordered Table -->
            <h3 class="onv-subsection-title">Bordered Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-bordered">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tech Corp</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>+49 123 456</td>
                        </tr>
                        <tr>
                            <td>Global Systems</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                            <td>+52 987 654</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                            <td>+44 555 123</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Hover Table -->
            <h3 class="onv-subsection-title">Hover Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-hover">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Assignee</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fix login bug</td>
                            <td>John Doe</td>
                            <td>2024-01-15</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Update documentation</td>
                            <td>Jane Smith</td>
                            <td>2024-01-20</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>Code review</td>
                            <td>Mike Johnson</td>
                            <td>2024-01-12</td>
                            <td>High</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Clean Table -->
            <h3 class="onv-subsection-title">Clean Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-clean">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Storage</td>
                            <td>10 GB</td>
                            <td>100 GB</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Users</td>
                            <td>5</td>
                            <td>25</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Email</td>
                            <td>Email + Chat</td>
                            <td>24/7 Phone</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Table Sizes -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Table Sizes</h2>
            <p class="onv-section-description">Berbagai ukuran table untuk space yang berbeda.</p>
            
            <!-- Small Table -->
            <h3 class="onv-subsection-title">Small Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-sm onv-table-striped">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Product A</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Product B</td>
                            <td>Out of Stock</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Large Table -->
            <h3 class="onv-subsection-title">Large Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-lg onv-table-hover">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Manager</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Sarah Wilson</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td>Mobile App</td>
                            <td>John Doe</td>
                            <td>45%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Compact Table -->
            <h3 class="onv-subsection-title">Compact Table</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-compact onv-table-bordered">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>09:00</td>
                            <td>Morning Standup</td>
                            <td>Conference Room A</td>
                        </tr>
                        <tr>
                            <td>14:00</td>
                            <td>Client Meeting</td>
                            <td>Zoom</td>
                        </tr>
                        <tr>
                            <td>16:30</td>
                            <td>Code Review</td>
                            <td>Dev Room</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Header Variants -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Header Variants</h2>
            <p class="onv-section-description">Berbagai style header untuk branding dan hierarki visual.</p>
            
            <!-- Dark Header -->
            <h3 class="onv-subsection-title">Dark Header</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-head-dark">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Revenue</td>
                            <td>$125,000</td>
                            <td>+12%</td>
                        </tr>
                        <tr>
                            <td>Users</td>
                            <td>2,543</td>
                            <td>+8%</td>
                        </tr>
                        <tr>
                            <td>Orders</td>
                            <td>892</td>
                            <td>+15%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Primary Header -->
            <h3 class="onv-subsection-title">Primary Header</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-head-primary">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Students</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>React Fundamentals</td>
                            <td>John Smith</td>
                            <td>245</td>
                            <td>4.8</td>
                        </tr>
                        <tr>
                            <td>Vue.js Advanced</td>
                            <td>Sarah Chen</td>
                            <td>156</td>
                            <td>4.7</td>
                        </tr>
                        <tr>
                            <td>Node.js Backend</td>
                            <td>Mike Johnson</td>
                            <td>198</td>
                            <td>4.9</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Success Header -->
            <h3 class="onv-subsection-title">Success Header</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-head-success">
                    <thead>
                        <tr>
                            <th>Test Case</th>
                            <th>Status</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>User Login</td>
                            <td>Passed</td>
                            <td>2.3s</td>
                        </tr>
                        <tr>
                            <td>Data Validation</td>
                            <td>Passed</td>
                            <td>1.8s</td>
                        </tr>
                        <tr>
                            <td>API Response</td>
                            <td>Passed</td>
                            <td>0.9s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Dark Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Dark Table</h2>
            <p class="onv-section-description">Table dengan theme gelap untuk tampilan yang elegan.</p>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-dark onv-table-striped onv-table-hover">
                    <thead>
                        <tr>
                            <th>Server</th>
                            <th>Status</th>
                            <th>CPU</th>
                            <th>Memory</th>
                            <th>Uptime</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>prod-web-01</td>
                            <td><span style="color: #10b981;">●</span> Online</td>
                            <td>45%</td>
                            <td>68%</td>
                            <td>99.9%</td>
                        </tr>
                        <tr>
                            <td>prod-web-02</td>
                            <td><span style="color: #10b981;">●</span> Online</td>
                            <td>32%</td>
                            <td>54%</td>
                            <td>99.8%</td>
                        </tr>
                        <tr>
                            <td>prod-db-01</td>
                            <td><span style="color: #ef4444;">●</span> Offline</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td>98.2%</td>
                        </tr>
                        <tr>
                            <td>staging-01</td>
                            <td><span style="color: #f59e0b;">●</span> Maintenance</td>
                            <td>12%</td>
                            <td>28%</td>
                            <td>97.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Responsive Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Responsive Table</h2>
            <p class="onv-section-description">Table yang beradaptasi dengan ukuran layar berbeda.</p>
            
            <!-- Horizontal Scroll -->
            <h3 class="onv-subsection-title">Horizontal Scroll</h3>
            <div class="onv-demo-grid">
                <div class="onv-table-responsive">
                    <table class="onv-table onv-table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Hire Date</th>
                                <th>Salary</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@company.com</td>
                                <td>+1 (555) 123-4567</td>
                                <td>Engineering</td>
                                <td>Senior Developer</td>
                                <td>2022-01-15</td>
                                <td>$95,000</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Jane</td>
                                <td>Smith</td>
                                <td>jane.smith@company.com</td>
                                <td>+1 (555) 987-6543</td>
                                <td>Design</td>
                                <td>UX Designer</td>
                                <td>2021-11-03</td>
                                <td>$78,000</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>Mike</td>
                                <td>Johnson</td>
                                <td>mike.johnson@company.com</td>
                                <td>+1 (555) 456-7890</td>
                                <td>Engineering</td>
                                <td>Backend Developer</td>
                                <td>2023-03-20</td>
                                <td>$82,000</td>
                                <td>Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Sortable Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Sortable Table</h2>
            <p class="onv-section-description">Table dengan fitur sorting untuk mengorganisir data.</p>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-sortable onv-table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th class="onv-sort-asc">Age</th>
                            <th>City</th>
                            <th class="onv-sort-desc">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alice Johnson</td>
                            <td>28</td>
                            <td>New York</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Bob Smith</td>
                            <td>34</td>
                            <td>Los Angeles</td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>Carol Davis</td>
                            <td>29</td>
                            <td>Chicago</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>David Wilson</td>
                            <td>31</td>
                            <td>Houston</td>
                            <td>89</td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">
                    Click column headers to sort. Age is sorted ascending, Score is sorted descending.
                </p>
            </div>
        </section>

        <!-- Fixed Header Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Fixed Header Table</h2>
            <p class="onv-section-description">Table dengan header yang tetap terlihat saat scroll.</p>
            <div class="onv-demo-grid">
                <div class="onv-table-fixed-header">
                    <table class="onv-table onv-table-striped">
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>TXN001</td><td>2024-01-15</td><td>$1,250.00</td><td>Credit</td></tr>
                            <tr><td>TXN002</td><td>2024-01-14</td><td>$89.99</td><td>Debit</td></tr>
                            <tr><td>TXN003</td><td>2024-01-14</td><td>$2,500.00</td><td>Credit</td></tr>
                            <tr><td>TXN004</td><td>2024-01-13</td><td>$45.00</td><td>Debit</td></tr>
                            <tr><td>TXN005</td><td>2024-01-13</td><td>$156.78</td><td>Debit</td></tr>
                            <tr><td>TXN006</td><td>2024-01-12</td><td>$3,200.00</td><td>Credit</td></tr>
                            <tr><td>TXN007</td><td>2024-01-12</td><td>$67.50</td><td>Debit</td></tr>
                            <tr><td>TXN008</td><td>2024-01-11</td><td>$890.00</td><td>Credit</td></tr>
                            <tr><td>TXN009</td><td>2024-01-11</td><td>$23.99</td><td>Debit</td></tr>
                            <tr><td>TXN010</td><td>2024-01-10</td><td>$445.67</td><td>Credit</td></tr>
                            <tr><td>TXN011</td><td>2024-01-10</td><td>$78.90</td><td>Debit</td></tr>
                            <tr><td>TXN012</td><td>2024-01-09</td><td>$1,567.89</td><td>Credit</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Action Table -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Action Table</h2>
            <p class="onv-section-description">Table dengan kolom action untuk operasi CRUD.</p>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-hover">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Last Login</th>
                            <th class="onv-table-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--onv-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin-right: 12px;">
                                        JD
                                    </div>
                                    <div>
                                        <div style="font-weight: 500;">John Doe</div>
                                        <div style="font-size: 0.875rem; color: var(--onv-secondary);">john@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>Admin</td>
                            <td>2024-01-15 14:30</td>
                            <td class="onv-table-actions">
                                <button style="background: var(--onv-primary); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer; margin-right: 4px;">Edit</button>
                                <button style="background: var(--onv-danger); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer;">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--onv-success); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin-right: 12px;">
                                        JS
                                    </div>
                                    <div>
                                        <div style="font-weight: 500;">Jane Smith</div>
                                        <div style="font-size: 0.875rem; color: var(--onv-secondary);">jane@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>Editor</td>
                            <td>2024-01-15 09:15</td>
                            <td class="onv-table-actions">
                                <button style="background: var(--onv-primary); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer; margin-right: 4px;">Edit</button>
                                <button style="background: var(--onv-danger); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer;">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--onv-warning); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin-right: 12px;">
                                        MJ
                                    </div>
                                    <div>
                                        <div style="font-weight: 500;">Mike Johnson</div>
                                        <div style="font-size: 0.875rem; color: var(--onv-secondary);">mike@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>User</td>
                            <td>2024-01-14 16:45</td>
                            <td class="onv-table-actions">
                                <button style="background: var(--onv-primary); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer; margin-right: 4px;">Edit</button>
                                <button style="background: var(--onv-danger); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer;">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Status Rows -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Status Rows & Cells</h2>
            <p class="onv-section-description">Table dengan highlighting untuk menunjukkan status atau prioritas.</p>
            <div class="onv-demo-grid">
                <table class="onv-table">
                    <thead>
                        <tr>
                            <th>Issue</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Assignee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="onv-table-row-danger">
                            <td>Critical security vulnerability</td>
                            <td class="onv-table-cell-danger">Critical</td>
                            <td>Open</td>
                            <td>John Doe</td>
                        </tr>
                        <tr class="onv-table-row-warning">
                            <td>Performance optimization needed</td>
                            <td class="onv-table-cell-warning">High</td>
                            <td>In Progress</td>
                            <td>Jane Smith</td>
                        </tr>
                        <tr class="onv-table-row-success">
                            <td>Feature implementation complete</td>
                            <td class="onv-table-cell-success">Low</td>
                            <td>Resolved</td>
                            <td>Mike Johnson</td>
                        </tr>
                        <tr class="onv-table-row-info">
                            <td>Documentation update</td>
                            <td class="onv-table-cell-info">Medium</td>
                            <td>Review</td>
                            <td>Sarah Wilson</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Empty State -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Empty State</h2>
            <p class="onv-section-description">Table dengan state kosong yang informatif dan user-friendly.</p>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-bordered">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4" class="onv-table-empty">
                                <div class="onv-table-empty-icon">📋</div>
                                <div class="onv-table-empty-title">No orders found</div>
                                <div class="onv-table-empty-text">There are no orders to display at the moment.</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Loading State -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Loading State</h2>
            <p class="onv-section-description">Table dengan animasi loading untuk memberikan feedback visual.</p>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-striped onv-table-loading">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Advanced Features -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Advanced Features</h2>
            <p class="onv-section-description">Fitur lanjutan untuk table yang kompleks.</p>
            
            <!-- Table with Caption -->
            <h3 class="onv-subsection-title">Table with Caption</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-striped">
                    <caption>Monthly sales report for Q1 2024</caption>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Revenue</th>
                            <th>Orders</th>
                            <th>Growth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>January</td>
                            <td>$45,000</td>
                            <td>180</td>
                            <td>+5%</td>
                        </tr>
                        <tr>
                            <td>February</td>
                            <td>$52,000</td>
                            <td>208</td>
                            <td>+15%</td>
                        </tr>
                        <tr>
                            <td>March</td>
                            <td>$58,000</td>
                            <td>235</td>
                            <td>+12%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Alignment Examples -->
            <h3 class="onv-subsection-title">Text & Vertical Alignment</h3>
            <div class="onv-demo-grid">
                <table class="onv-table onv-table-bordered">
                    <thead>
                        <tr>
                            <th class="onv-text-left">Left Aligned</th>
                            <th class="onv-text-center">Center Aligned</th>
                            <th class="onv-text-right">Right Aligned</th>
                            <th class="onv-align-top">Top Aligned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="onv-text-left">Left content</td>
                            <td class="onv-text-center">Centered content</td>
                            <td class="onv-text-right">Right content</td>
                            <td class="onv-align-top" style="height: 60px;">
                                This content is aligned to the top of the cell
                            </td>
                        </tr>
                        <tr>
                            <td class="onv-text-left">More left content</td>
                            <td class="onv-text-center">More centered</td>
                            <td class="onv-text-right">More right</td>
                            <td class="onv-align-middle" style="height: 60px;">
                                This content is middle aligned
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Usage Guidelines -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">Usage Guidelines</h2>
            <p class="onv-section-description">Panduan penggunaan komponen table untuk hasil terbaik.</p>

            <h3 class="onv-subsection-title">When to Use Tables</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Data Comparison:</strong> Saat perlu membandingkan data dalam format baris dan kolom</li>
                <li><strong>Structured Data:</strong> Untuk menampilkan data yang terstruktur dengan hubungan yang jelas</li>
                <li><strong>Numerical Information:</strong> Ideal untuk data numerik, statistik, dan metrics</li>
                <li><strong>Sortable Data:</strong> Ketika pengguna perlu mengurutkan atau filter data</li>
            </ul>

            <h3 class="onv-subsection-title">Table Structure Best Practices</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Selalu gunakan semantic HTML tags (table, thead, tbody, th, td)</li>
                <li>Berikan header yang deskriptif dan mudah dipahami</li>
                <li>Gunakan consistent alignment untuk data sejenis</li>
                <li>Implement proper sorting indicators untuk sortable columns</li>
                <li>Berikan caption untuk context yang lebih baik</li>
            </ul>

            <h3 class="onv-subsection-title">Responsive Considerations</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan horizontal scroll untuk table dengan banyak kolom</li>
                <li>Pertimbangkan stack layout untuk mobile devices</li>
                <li>Prioritaskan kolom yang paling penting untuk tampilan mobile</li>
                <li>Implementasikan fixed header untuk table yang panjang</li>
            </ul>

            <h3 class="onv-subsection-title">Visual Hierarchy</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li><strong>Headers:</strong> Gunakan warna header yang kontras dengan body</li>
                <li><strong>Striped:</strong> Untuk table dengan banyak baris</li>
                <li><strong>Hover:</strong> Untuk interactive tables</li>
                <li><strong>Status Colors:</strong> Untuk highlighting data penting</li>
            </ul>

            <h3 class="onv-subsection-title">Accessibility</h3>
            <ul style="margin: 16px 0; padding-left: 24px; color: #4b5563; line-height: 1.6;">
                <li>Gunakan proper header associations dengan scope attributes</li>
                <li>Berikan alternative text untuk complex tables</li>
                <li>Pastikan keyboard navigation works untuk sortable tables</li>
                <li>Maintain sufficient color contrast untuk all elements</li>
                <li>Use ARIA labels untuk dynamic content</li>
            </ul>
        </section>

        <!-- CSS Classes Reference -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">CSS Classes Reference</h2>
            <p class="onv-section-description">Daftar lengkap class CSS yang tersedia untuk komponen table.</p>
            <div style="overflow-x: auto; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Class</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Description</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Base table styling</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Required for all tables</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-striped</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Zebra striping</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Alternating row colors</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-bordered</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Add borders</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Full table borders</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-borderless</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Remove borders</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Clean borderless look</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-hover</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Hover effect</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Interactive tables</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-clean</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Minimal styling</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Simple clean table</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-sm</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Small padding</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Compact tables</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-lg</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Large padding</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Spacious tables</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-compact</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Extra compact</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dense data display</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-dark</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dark theme</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Dark background table</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-head-*</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Header variants</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Colored headers</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-responsive</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Horizontal scroll</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Mobile friendly</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-sortable</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Sortable headers</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Interactive sorting</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-fixed-header</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Sticky header</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Long table scrolling</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-actions</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Action column</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Button containers</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-row-*</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Row status colors</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Highlight entire rows</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-cell-*</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Cell status colors</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Highlight individual cells</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-table-loading</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Loading state</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Data loading feedback</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;"><code>.onv-text-*</code></td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">Text alignment</td>
                            <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6;">left, center, right</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 16px;"><code>.onv-align-*</code></td>
                            <td style="padding: 12px 16px;">Vertical alignment</td>
                            <td style="padding: 12px 16px;">top, middle, bottom</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- JavaScript Integration -->
        <section class="onv-doc-section">
            <h2 class="onv-section-title">JavaScript Integration</h2>
            <p class="onv-section-description">Contoh integrasi JavaScript untuk fitur interaktif.</p>
            
            <h3 class="onv-subsection-title">Table Sorting</h3>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0;">
                <pre style="margin: 0; font-size: 14px; line-height: 1.5; color: #374151;"><code>// Simple table sorting
function sortTable(columnIndex, ascending = true) {
    const table = document.querySelector('.onv-table-sortable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    const sortedRows = rows.sort((a, b) => {
        const aVal = a.cells[columnIndex].textContent.trim();
        const bVal = b.cells[columnIndex].textContent.trim();
        
        // Check if values are numbers
        const aNum = parseFloat(aVal);
        const bNum = parseFloat(bVal);
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return ascending ? aNum - bNum : bNum - aNum;
        }
        
        return ascending ? 
            aVal.localeCompare(bVal) : 
            bVal.localeCompare(aVal);
    });
    
    // Update table
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
    
    // Update header classes
    updateSortHeaders(columnIndex, ascending);
}</code></pre>
            </div>

            <h3 class="onv-subsection-title">Responsive Stack Layout</h3>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0;">
                <pre style="margin: 0; font-size: 14px; line-height: 1.5; color: #374151;"><code>// Add data labels for responsive stack layout
function addResponsiveLabels() {
    const table = document.querySelector('.onv-table-responsive-stack');
    const headers = table.querySelectorAll('thead th');
    const cells = table.querySelectorAll('tbody td');
    
    cells.forEach((cell, index) => {
        const headerIndex = index % headers.length;
        const headerText = headers[headerIndex].textContent;
        cell.setAttribute('data-label', headerText);
    });
}

// Call on page load and resize
window.addEventListener('load', addResponsiveLabels);
window.addEventListener('resize', addResponsiveLabels);</code></pre>
            </div>
        </section>
    </div>
</template>