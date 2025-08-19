// generate-resume.js
const fs = require("fs");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function createResume() {
  // Create new PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { height } = page.getSize();

  // Load fonts
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let y = height - 50;

  // Helper function to add text
  function addText(text, x, fontType = font, size = 12, color = rgb(0, 0, 0)) {
    page.drawText(text, {
      x,
      y,
      size,
      font: fontType,
      color,
    });
    y -= size + 6;
  }

  // ===== HEADER =====
  addText("Amogha Koulapure", 50, boldFont, 22, rgb(0, 0.2, 0.6));
  addText("Computer Science & Engineering Student", 50, font, 14, rgb(0.3, 0.3, 0.3));
  y -= 15;
  addText("e-mail: amoghakoulapure@email.com | 📱 +91 9606248579 | portfolio-link: tinyurl.com/akoulapure", 50, font, 11, rgb(0.2, 0.2, 0.2));

  y -= 25;

  // ===== EDUCATION =====
  addText("🎓 Education", 50, boldFont, 16, rgb(0, 0, 0));
  addText("B.E. in Computer Science & Engineering", 50, boldFont, 12);
  addText("Bapuji Institute of Engineering & Technology, Davangere", 50, font, 12);
  addText("2023 – Present | CGPA: 8.7/10", 50, font, 12);

  y -= 20;

  // ===== SKILLS =====
  addText("🛠 Skills", 50, boldFont, 16);
  addText("Languages: C, C++, Python, JavaScript", 50, font, 12);
  addText("Web: HTML, CSS, React, Node.js", 50, font, 12);
  addText("Databases: MongoDB, MySQL, Firebase", 50, font, 12);
  addText("Tools: Git, VS Code, Xcode", 50, font, 12);

  y -= 20;

  // ===== PROJECTS =====
  addText("📂 Projects", 50, boldFont, 16);

  addText("Personalized Shopping using Emotion Analysis & Social Interaction", 50, boldFont, 12);
  addText("• AI-based shopping app recommending products based on user emotions.", 60, font, 11);
  addText("• Includes group shopping, sorting, and cart review features.", 60, font, 11);

  y -= 10;

  addText("Assured Contract Farming System (Smart India Hackathon)", 50, boldFont, 12);
  addText("• Helps farmers access stable markets using verified data & AI.", 60, font, 11);
  addText("• Aadhaar/GST verification, multilingual LLM integration, price analytics.", 60, font, 11);

  y -= 20;

  // ===== EXTRA =====
  addText("🏆 Achievements & Activities", 50, boldFont, 16);
  addText("• Participated in Smart India Hackathon 2025 (Team Glitch Hunters).", 50, font, 12);
  addText("• Published articles in BIET's annual magazine Technowave.", 50, font, 12);
  addText("• Active contributor to open-source projects.", 50, font, 12);

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("resume.pdf", pdfBytes);
  console.log("✅ Resume PDF created successfully!");
}

createResume();
