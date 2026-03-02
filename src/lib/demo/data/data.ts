// fake analytics data for the sandbox to query

export const USERS_CSV = `id,name,email,signup_date,plan
1,Alice Johnson,alice@example.com,2024-01-15,pro
2,Bob Smith,bob@example.com,2024-02-20,free
3,Carol White,carol@example.com,2024-03-10,enterprise
4,Dan Brown,dan@example.com,2024-03-25,pro
5,Eve Davis,eve@example.com,2024-04-01,free
6,Frank Miller,frank@example.com,2024-04-15,pro
7,Grace Lee,grace@example.com,2024-05-01,enterprise
8,Henry Wilson,henry@example.com,2024-05-20,free
9,Ivy Chen,ivy@example.com,2024-06-10,pro
10,Jack Taylor,jack@example.com,2024-06-25,free`;

export const VISITS_CSV = `id,user_id,page,timestamp,duration_seconds,referrer
1,1,/home,2024-06-01 09:00:00,45,google
2,1,/pricing,2024-06-01 09:01:00,120,direct
3,2,/home,2024-06-01 10:30:00,30,twitter
4,3,/dashboard,2024-06-01 11:00:00,300,direct
5,1,/features,2024-06-02 14:00:00,90,google
6,4,/home,2024-06-02 15:00:00,60,facebook
7,4,/pricing,2024-06-02 15:02:00,180,direct
8,5,/home,2024-06-03 09:00:00,20,google
9,6,/dashboard,2024-06-03 10:00:00,240,direct
10,7,/home,2024-06-03 11:00:00,55,linkedin
11,7,/features,2024-06-03 11:01:00,150,direct
12,7,/pricing,2024-06-03 11:04:00,200,direct
13,8,/home,2024-06-04 08:00:00,25,google
14,9,/dashboard,2024-06-04 09:30:00,180,direct
15,10,/home,2024-06-04 14:00:00,40,twitter
16,1,/dashboard,2024-06-05 10:00:00,350,direct
17,3,/dashboard,2024-06-05 11:00:00,400,direct
18,6,/pricing,2024-06-05 14:00:00,95,google
19,2,/features,2024-06-06 09:00:00,70,direct
20,4,/dashboard,2024-06-06 10:00:00,280,direct`;

export const EVENTS_CSV = `id,user_id,event_type,element,page,timestamp
1,1,click,signup_button,/home,2024-06-01 09:00:30
2,1,click,pricing_tab,/pricing,2024-06-01 09:01:30
3,1,click,pro_plan_select,/pricing,2024-06-01 09:02:00
4,2,click,signup_button,/home,2024-06-01 10:30:15
5,3,click,export_data,/dashboard,2024-06-01 11:02:00
6,3,click,create_report,/dashboard,2024-06-01 11:03:00
7,4,click,signup_button,/home,2024-06-02 15:00:30
8,4,click,pro_plan_select,/pricing,2024-06-02 15:03:00
9,5,scroll,page_bottom,/home,2024-06-03 09:00:15
10,6,click,dashboard_nav,/dashboard,2024-06-03 10:01:00
11,7,click,signup_button,/home,2024-06-03 11:00:30
12,7,click,feature_demo,/features,2024-06-03 11:02:00
13,7,click,enterprise_plan_select,/pricing,2024-06-03 11:05:00
14,8,scroll,page_bottom,/home,2024-06-04 08:00:20
15,9,click,create_report,/dashboard,2024-06-04 09:31:00
16,10,click,signup_button,/home,2024-06-04 14:00:25
17,1,click,export_data,/dashboard,2024-06-05 10:02:00
18,3,click,settings,/dashboard,2024-06-05 11:05:00
19,6,click,free_plan_select,/pricing,2024-06-05 14:01:00
20,4,click,create_report,/dashboard,2024-06-06 10:03:00`;

export const PREBAKED_QUESTIONS = [
  "How many users signed up each month?",
  "Which page has the highest average visit duration?",
  "What are the most clicked elements?",
  "How many pro vs free vs enterprise users?",
  "Which referrer brings the most traffic?",
];
