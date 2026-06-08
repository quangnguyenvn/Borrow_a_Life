$ErrorActionPreference = "Stop"

$demoDir = "D:\git\Borow_A_Life\demo"
$screens = Join-Path $demoDir "screenshots"
$outDir = Join-Path $demoDir "output"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$pptxPath = Join-Path $outDir "borrow-a-life-demo-storyboard.pptx"
$mp4Path = Join-Path $outDir "borrow-a-life-demo-75s.mp4"

function Rgb($r, $g, $b) {
  return $r + (256 * $g) + (65536 * $b)
}

$slides = @(
  @{
    Image = "01-home-hero.png"
    Duration = 9
    Eyebrow = "BORROW A LIFE"
    Title = "Borrow a life. See your own differently."
    Subtitle = "A public window into another person's real rhythm."
  },
  @{
    Image = "01-home-hero.png"
    Duration = 10
    Eyebrow = "LIFE WINDOWS IN MOTION"
    Title = "Four public rhythms, seen from inside."
    Subtitle = "Software engineer, farmer, line cook, and street vendor."
  },
  @{
    Image = "02-explore.png"
    Duration = 13
    Eyebrow = "EXPLORE"
    Title = "Browse possible perspectives."
    Subtitle = "Each life window shows intent, duration, price, tags, and safety score."
  },
  @{
    Image = "03-detail-berlin.png"
    Duration = 14
    Eyebrow = "DETAIL"
    Title = "Understand the rhythm before booking."
    Subtitle = "Host profile, itinerary, boundaries, and the meaning behind the workday."
  },
  @{
    Image = "04-booking.png"
    Duration = 16
    Eyebrow = "AI SAFETY ENGINE"
    Title = "Safety analysis before every request."
    Subtitle = "The app checks time, duration, location type, transport risk, and public exit access."
  },
  @{
    Image = "04-booking.png"
    Duration = 9
    Eyebrow = "BOUNDARY CONTRACT"
    Title = "Allowed, not allowed, and required."
    Subtitle = "Every safe request becomes a clear public boundary contract."
  },
  @{
    Image = "05-safety.png"
    Duration = 7
    Eyebrow = "STARTUP MVP"
    Title = "Borrow perspective, not private life."
    Subtitle = "Most platforms help you book places. Borrow a Life helps you borrow perspective."
  }
)

$powerPoint = New-Object -ComObject PowerPoint.Application
$powerPoint.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
$presentation = $powerPoint.Presentations.Add()

# Use a 16:10 canvas matching the screenshots.
$presentation.PageSetup.SlideWidth = 1440
$presentation.PageSetup.SlideHeight = 900

foreach ($scene in $slides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, 12)
  $imagePath = Join-Path $screens $scene.Image

  $picture = $slide.Shapes.AddPicture($imagePath, $false, $true, 0, 0, 1440, 900)
  $picture.ZOrder(1) | Out-Null

  $shade = $slide.Shapes.AddShape(1, 0, 0, 1440, 900)
  $shade.Fill.ForeColor.RGB = Rgb 29 27 24
  $shade.Fill.Transparency = 0.68
  $shade.Line.Visible = 0

  $panel = $slide.Shapes.AddShape(1, 72, 652, 940, 166)
  $panel.Fill.ForeColor.RGB = Rgb 247 243 237
  $panel.Fill.Transparency = 0.08
  $panel.Line.Visible = 0

  $eyebrow = $slide.Shapes.AddTextbox(1, 104, 684, 700, 28)
  $eyebrow.TextFrame.TextRange.Text = $scene.Eyebrow
  $eyebrow.TextFrame.TextRange.Font.Name = "Segoe UI"
  $eyebrow.TextFrame.TextRange.Font.Size = 16
  $eyebrow.TextFrame.TextRange.Font.Bold = $true
  $eyebrow.TextFrame.TextRange.Font.Color.RGB = Rgb 255 90 54

  $title = $slide.Shapes.AddTextbox(1, 104, 720, 820, 58)
  $title.TextFrame.TextRange.Text = $scene.Title
  $title.TextFrame.TextRange.Font.Name = "Segoe UI"
  $title.TextFrame.TextRange.Font.Size = 36
  $title.TextFrame.TextRange.Font.Bold = $true
  $title.TextFrame.TextRange.Font.Color.RGB = Rgb 29 27 24

  $subtitle = $slide.Shapes.AddTextbox(1, 104, 774, 820, 42)
  $subtitle.TextFrame.TextRange.Text = $scene.Subtitle
  $subtitle.TextFrame.TextRange.Font.Name = "Segoe UI"
  $subtitle.TextFrame.TextRange.Font.Size = 21
  $subtitle.TextFrame.TextRange.Font.Color.RGB = Rgb 112 106 97

  $barBack = $slide.Shapes.AddShape(1, 1060, 804, 286, 8)
  $barBack.Fill.ForeColor.RGB = Rgb 222 213 200
  $barBack.Fill.Transparency = 0.2
  $barBack.Line.Visible = 0

  $slide.SlideShowTransition.AdvanceOnTime = $true
  $slide.SlideShowTransition.AdvanceTime = [double]$scene.Duration
}

$presentation.SaveAs($pptxPath)

if (Test-Path $mp4Path) {
  Remove-Item -LiteralPath $mp4Path -Force
}

$presentation.CreateVideo($mp4Path, $true, 5, 1080, 30, 85)

$deadline = (Get-Date).AddMinutes(8)
while ((Get-Date) -lt $deadline) {
  Start-Sleep -Seconds 3
  if (Test-Path $mp4Path) {
    $file = Get-Item -LiteralPath $mp4Path
    if ($file.Length -gt 100000) {
      Start-Sleep -Seconds 5
      $file2 = Get-Item -LiteralPath $mp4Path
      if ($file2.Length -eq $file.Length) {
        break
      }
    }
  }
}

$presentation.Close()
$powerPoint.Quit()

[System.Runtime.InteropServices.Marshal]::ReleaseComObject($presentation) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($powerPoint) | Out-Null

if (!(Test-Path $mp4Path)) {
  throw "PowerPoint did not create the MP4 file."
}

Get-Item -LiteralPath $mp4Path | Select-Object FullName, Length
