#!/usr/bin/env python3
"""Rellena QRs + links del flyer paciente y exporta PDF.

Uso (cuando tengas las URLs de las tiendas):

  python3 fill_flyer_paciente.py \\
    --ios "https://apps.apple.com/app/idXXXXXXXX" \\
    --android "https://play.google.com/store/apps/details?id=mx.lynkamed.paciente"

Sin args: solo regenera el PDF con los placeholders actuales.
"""
from __future__ import annotations

import argparse
import re
import subprocess
from pathlib import Path

OUT = Path(__file__).resolve().parent
HTML = OUT / "lynkamed-flyer-paciente.html"
PDF = OUT / "LynkaMed-Flyer-Paciente.pdf"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
QR_DIR = OUT / "qr"


def make_qr(url: str, path: Path) -> None:
    try:
        import qrcode
    except ImportError:
        subprocess.check_call(["python3", "-m", "pip", "install", "qrcode[pil]", "-q"])
        import qrcode

    img = qrcode.make(url, border=1)
    img = img.resize((320, 320))
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path)


def patch_html(ios: str | None, android: str | None) -> None:
    html = HTML.read_text(encoding="utf-8")

    if ios:
        make_qr(ios, QR_DIR / "qr-appstore.png")
        html = re.sub(
            r'(id="qr-ios">)([\s\S]*?)(</div>\s*<div class="store-label">App Store)',
            r'\1\n              <img src="qr/qr-appstore.png" alt="App Store" style="display:block" />\n            \3',
            html,
            count=1,
        )
        html = re.sub(
            r'<a class="store-link" id="link-ios"[^>]*>.*?</a>',
            f'<a class="store-link" id="link-ios" href="{ios}">{ios}</a>',
            html,
            count=1,
        )

    if android:
        make_qr(android, QR_DIR / "qr-playstore.png")
        html = re.sub(
            r'(id="qr-android">)([\s\S]*?)(</div>\s*<div class="store-label">Google Play)',
            r'\1\n              <img src="qr/qr-playstore.png" alt="Google Play" style="display:block" />\n            \3',
            html,
            count=1,
        )
        html = re.sub(
            r'<a class="store-label" id="link-android"[^>]*>.*?</a>',
            f'<a class="store-link" id="link-android" href="{android}">{android}</a>',
            html,
            count=1,
        )
        html = re.sub(
            r'<a class="store-link" id="link-android"[^>]*>.*?</a>',
            f'<a class="store-link" id="link-android" href="{android}">{android}</a>',
            html,
            count=1,
        )

    HTML.write_text(html, encoding="utf-8")


def export_pdf() -> None:
    subprocess.check_call(
        [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={PDF}",
            HTML.as_uri(),
        ]
    )
    print(f"PDF → {PDF}")


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--ios", default=None)
    p.add_argument("--android", default=None)
    args = p.parse_args()
    if args.ios or args.android:
        patch_html(args.ios, args.android)
    export_pdf()


if __name__ == "__main__":
    main()
