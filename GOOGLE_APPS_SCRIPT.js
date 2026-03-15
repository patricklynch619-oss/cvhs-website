// =============================================================
// Google Apps Script — Paste this into script.google.com
// This receives form submissions from your website and
// appends them to the "CVHS Customer Leads" Google Sheet.
// =============================================================

// IMPORTANT: Replace the SPREADSHEET_ID below with your actual sheet ID
const SPREADSHEET_ID = '1cQMu8xp3nj0pdOlWb9TOXKfMiBrJsxGdVs9RBqB4lHo';
const SHEET_NAME = 'Leads';

// Handle POST requests from the website form
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Append a new row with the form data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),  // Timestamp
      data.fullName || '',                          // Full Name
      data.email || '',                             // Email
      data.phone || '',                             // Phone
      data.address || '',                           // Address
      data.service || '',                           // Service Needed
      data.preferredDate || '',                     // Preferred Date
      data.referral || '',                          // Referral Source
      data.details || '',                           // Additional Details
      'New Lead'                                    // Status (default)
    ]);
    
    // Send email notification to Patrick
    const subject = 'New Lead: ' + (data.service || 'General Inquiry') + ' - ' + (data.fullName || 'Unknown');
    const body = 'New customer inquiry received!\n\n' +
      'Name: ' + (data.fullName || 'N/A') + '\n' +
      'Email: ' + (data.email || 'N/A') + '\n' +
      'Phone: ' + (data.phone || 'N/A') + '\n' +
      'Address: ' + (data.address || 'N/A') + '\n' +
      'Service: ' + (data.service || 'N/A') + '\n' +
      'Preferred Date: ' + (data.preferredDate || 'N/A') + '\n' +
      'Referral: ' + (data.referral || 'N/A') + '\n' +
      'Details: ' + (data.details || 'N/A') + '\n\n' +
      'View all leads: https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID;
    
    MailApp.sendEmail('patricklynch619@gmail.com', subject, body);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'CVHS Form Handler is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
