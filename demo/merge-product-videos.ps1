$ErrorActionPreference = "Stop"

$sourceDir = "C:\Users\QuangNH1\Documents\video_set1"
$outputPath = Join-Path $sourceDir "Borrow_a_Life_product_demo_merged.mp4"
$pptxPath = Join-Path $sourceDir "Borrow_a_Life_product_demo_merge_source.pptx"

function Rgb($r, $g, $b) {
  return $r + (256 * $g) + (65536 * $b)
}

function Get-MediaDurationSeconds($filePath) {
  $shell = New-Object -ComObject Shell.Application
  $folder = $shell.Namespace((Split-Path -Parent $filePath))
  $item = $folder.ParseName((Split-Path -Leaf $filePath))
  $length = $folder.GetDetailsOf($item, 27)

  if (-not $length) {
    return 8
  }

  $parts = $length.Split(":") | ForEach-Object { [int]$_ }
  if ($parts.Count -eq 3) {
    return ($parts[0] * 3600) + ($parts[1] * 60) + $parts[2]
  }
  if ($parts.Count -eq 2) {
    return ($parts[0] * 60) + $parts[1]
  }

  return 8
}

$software = Get-ChildItem -LiteralPath $sourceDir -File | Where-Object { $_.Name -like "Software_engineer*" } | Select-Object -First 1
$farmer = Get-ChildItem -LiteralPath $sourceDir -File | Where-Object { $_.Name -like "Farmer*" } | Select-Object -First 1
$cook = Get-ChildItem -LiteralPath $sourceDir -File | Where-Object { $_.Name -like "Line_cook*" } | Select-Object -First 1
$vendor = Get-ChildItem -LiteralPath $sourceDir -File | Where-Object { $_.Name -like "Street_vendor*" } | Select-Object -First 1
$borrow = Get-ChildItem -LiteralPath $sourceDir -File | Where-Object { $_.Name -eq "Borrow A life.mp4" } | Select-Object -First 1

$ordered = @($software, $farmer, $cook, $vendor, $borrow)
if ($ordered | Where-Object { -not $_ }) {
  throw "Could not find all five source videos in $sourceDir"
}

$slides = @(
  @{ File = $software.FullName; Label = "Berlin Software Engineer" },
  @{ File = $farmer.FullName; Label = "Vegetable Farmer" },
  @{ File = $cook.FullName; Label = "Line Cook" },
  @{ File = $vendor.FullName; Label = "Street Vendor" },
  @{ File = $borrow.FullName; Label = "Borrow a Life Product Demo" }
)

$powerPoint = New-Object -ComObject PowerPoint.Application
$powerPoint.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
$presentation = $powerPoint.Presentations.Add()

# 16:9 Full HD canvas.
$presentation.PageSetup.SlideWidth = 1920
$presentation.PageSetup.SlideHeight = 1080

foreach ($entry in $slides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, 12)
  $duration = [Math]::Max(1, (Get-MediaDurationSeconds $entry.File))

  $bg = $slide.Shapes.AddShape(1, 0, 0, 1920, 1080)
  $bg.Fill.ForeColor.RGB = Rgb 29 27 24
  $bg.Line.Visible = 0

  $video = $slide.Shapes.AddMediaObject2($entry.File, $false, $true, 0, 0, 1920, 1080)
  $video.LockAspectRatio = 0
  $video.Left = 0
  $video.Top = 0
  $video.Width = 1920
  $video.Height = 1080

  $video.AnimationSettings.PlaySettings.PlayOnEntry = $true
  $video.AnimationSettings.PlaySettings.HideWhileNotPlaying = $false

  $slide.SlideShowTransition.AdvanceOnTime = $true
  $slide.SlideShowTransition.AdvanceTime = [double]$duration
}

if (Test-Path $pptxPath) {
  Remove-Item -LiteralPath $pptxPath -Force
}
if (Test-Path $outputPath) {
  Remove-Item -LiteralPath $outputPath -Force
}

$presentation.SaveAs($pptxPath)
$presentation.CreateVideo($outputPath, $true, 5, 1080, 30, 90)

$deadline = (Get-Date).AddMinutes(15)
while ((Get-Date) -lt $deadline) {
  Start-Sleep -Seconds 5
  if (Test-Path $outputPath) {
    $file = Get-Item -LiteralPath $outputPath
    if ($file.Length -gt 100000) {
      Start-Sleep -Seconds 8
      $file2 = Get-Item -LiteralPath $outputPath
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

if (!(Test-Path $outputPath)) {
  throw "PowerPoint did not create merged MP4."
}

Get-Item -LiteralPath $outputPath | Select-Object FullName, Length, LastWriteTime
