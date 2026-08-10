#!/usr/bin/env python3
"""Generate LynkaMed specialty sales one-pagers (HTML → PDF via Chrome)."""
from pathlib import Path
import subprocess

OUT = Path("/Users/emmanuelosnayamartinez/Desktop/lynkamed-landing/sales")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

CSS = r"""
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  width: 210mm; height: 297mm;
  font-family: 'Figtree', system-ui, sans-serif;
  color: #0f172a; background: #fff;
  -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
a { color: inherit; text-decoration: none; border: 0; outline: 0; box-shadow: none; }
.page { width: 210mm; height: 297mm; position: relative; overflow: hidden; background: #f1f5f9; }
.ribbon {
  background: #00d4ff; color: #002147; text-align: center;
  font-family: 'Manrope', sans-serif; font-size: 9px; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase; padding: 2.2mm 4mm;
}
.hero {
  position: relative; padding: 8mm 14mm 14mm;
  background:
    radial-gradient(ellipse 65% 70% at 95% 0%, rgba(0,212,255,0.22), transparent 50%),
    radial-gradient(ellipse 45% 50% at 5% 90%, rgba(0,102,255,0.25), transparent 45%),
    linear-gradient(155deg, #060d1f 0%, #002147 50%, #0a2a5c 100%);
  color: #fff;
}
.hero::after {
  content: ''; position: absolute; inset: 0; opacity: 0.055; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
  background-size: 18px 18px;
}
.hero-top {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 7mm;
}
.brand { display: flex; align-items: center; gap: 3mm; }
.brand-mark { width: 11mm; height: 11mm; flex-shrink: 0; border-radius: 2.2mm; display: block; object-fit: cover; background: #fff; }
.brand-word {
  font-family: 'Manrope', sans-serif; font-size: 21px; font-weight: 800;
  letter-spacing: -0.04em; line-height: 1;
}
.brand-word .lynka { color: #fff; }
.brand-word .med { color: #00d4ff; }
.brand-sub {
  margin-top: 1.2mm; font-size: 7.5px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.4);
}
.pill {
  font-size: 8px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
  color: #002147; background: #00d4ff; border-radius: 999px; padding: 2mm 3.8mm;
}
.hero-copy { position: relative; z-index: 1; max-width: 175mm; }
.eyebrow {
  font-size: 9px; font-weight: 800; letter-spacing: 0.16em;
  text-transform: uppercase; color: #00d4ff; margin-bottom: 3mm;
}
h1 {
  font-family: 'Manrope', sans-serif; font-size: 26px; font-weight: 800;
  line-height: 1.1; letter-spacing: -0.035em; color: #fff;
}
h1 em { font-style: normal; color: #00d4ff; }
.lead {
  margin-top: 3.5mm; font-size: 11.5px; line-height: 1.5;
  color: rgba(226,232,240,0.88); max-width: 162mm;
}
.hero-proof {
  margin-top: 4mm; display: flex; flex-wrap: wrap; gap: 2.5mm 5mm;
  font-size: 9px; font-weight: 600; color: rgba(255,255,255,0.72);
}
.hero-proof span { display: flex; align-items: center; gap: 1.5mm; }
.hero-proof span::before { content: '✓'; color: #00d4ff; font-weight: 800; }
.stats {
  position: relative; z-index: 2; margin: -7mm 14mm 0;
  display: grid; grid-template-columns: repeat(4, 1fr);
  background: #fff; border-radius: 12px;
  box-shadow: 0 14px 40px rgba(0,33,71,0.16); overflow: hidden;
}
.stat { padding: 4.5mm 4mm; border-right: 1px solid #e8ecf2; }
.stat:last-child { border-right: 0; }
.stat strong {
  display: block; font-family: 'Manrope', sans-serif;
  font-size: 17px; font-weight: 800; color: #0066ff; letter-spacing: -0.03em;
}
.stat span {
  display: block; margin-top: 1mm; font-size: 8.5px; font-weight: 600;
  color: #5c6578; line-height: 1.3;
}
.body { padding: 5mm 14mm 0; }
.hook {
  background: #fff; border-left: 3.5px solid #00d4ff; border-radius: 0 10px 10px 0;
  padding: 3.2mm 4.5mm; margin-bottom: 4mm;
  box-shadow: 0 4px 16px rgba(15,23,42,0.04);
}
.hook p {
  font-family: 'Manrope', sans-serif; font-size: 11.5px; font-weight: 700;
  color: #002147; line-height: 1.35;
}
.hook span { color: #0066ff; }
.cols { display: grid; grid-template-columns: 1.2fr 0.9fr; gap: 4mm; }
.left-block {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 4.5mm 5mm;
}
.section-label {
  font-family: 'Manrope', sans-serif; font-size: 8.5px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase; color: #0066ff; margin-bottom: 3mm;
}
.benefits { display: flex; flex-direction: column; gap: 3mm; }
.benefit { display: grid; grid-template-columns: 7mm 1fr; gap: 2.5mm; }
.benefit-ico {
  width: 7mm; height: 7mm; border-radius: 7px; background: #eef4ff; color: #0066ff;
  font-family: 'Manrope', sans-serif; font-size: 9px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
}
.benefit h3 {
  font-family: 'Manrope', sans-serif; font-size: 11px; font-weight: 800;
  color: #002147; margin-bottom: 0.6mm;
}
.benefit p { font-size: 9.5px; line-height: 1.35; color: #5c6578; }
.right-col { display: flex; flex-direction: column; gap: 3.2mm; }
.pricing {
  background: linear-gradient(150deg, #002147 0%, #0b3a7a 65%, #0052cc 140%);
  border-radius: 12px; padding: 4.5mm 5mm; color: #fff; flex: 1;
}
.pricing-badge {
  display: inline-block; background: #00d4ff; color: #002147;
  font-size: 7.5px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; border-radius: 999px; padding: 1.2mm 2.8mm; margin-bottom: 2.5mm;
}
.pricing h2 { font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: 800; margin-bottom: 1mm; }
.pricing .sub { font-size: 8.5px; color: rgba(255,255,255,0.6); margin-bottom: 2.5mm; }
.cmp {
  background: rgba(0,0,0,0.22); border-radius: 8px; padding: 2.5mm 3mm; margin-bottom: 3mm;
  font-size: 8.5px; line-height: 1.4; color: rgba(255,255,255,0.75);
}
.cmp strong { color: #7dd3fc; }
.price-row {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 2.2mm 0; border-bottom: 1px solid rgba(255,255,255,0.12); font-size: 10.5px;
}
.price-row:last-of-type { border-bottom: 0; }
.price-row span { color: rgba(255,255,255,0.82); }
.price-row strong { font-family: 'Manrope', sans-serif; font-size: 15px; font-weight: 800; }
.was {
  font-size: 8.5px; color: rgba(255,255,255,0.4); text-decoration: line-through;
  margin-right: 1.5mm; font-weight: 600;
}
.save {
  display: inline-block; margin-left: 1.5mm; font-size: 7.5px; font-weight: 800;
  color: #002147; background: #86efac; border-radius: 4px; padding: 0.6mm 1.5mm;
  vertical-align: middle;
}
.price-note { margin-top: 2.5mm; font-size: 8px; line-height: 1.4; color: rgba(255,255,255,0.55); }
.risk {
  background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px;
  padding: 3mm 4mm; font-size: 9.5px; line-height: 1.4; color: #065f46;
}
.risk strong { color: #047857; }
.cta {
  margin: 4.5mm 14mm 0; display: flex; align-items: center; justify-content: space-between;
  gap: 4mm; padding: 4mm 5mm; border-radius: 12px; background: #060d1f; color: #fff;
}
.cta h3 { font-family: 'Manrope', sans-serif; font-size: 12.5px; font-weight: 800; letter-spacing: -0.02em; }
.cta p { margin-top: 1mm; font-size: 9px; color: rgba(226,232,240,0.72); max-width: 62mm; }
.cta-right { display: flex; align-items: center; gap: 4mm; flex-shrink: 0; }
.qr-row { display: flex; gap: 2.2mm; }
.qr {
  display: flex; flex-direction: column; align-items: center; gap: 1mm;
  text-decoration: none; color: inherit; border: 0; outline: 0; box-shadow: none;
}
.qr img {
  width: 16mm; height: 16mm; border-radius: 4px; background: #fff;
  padding: 1mm; display: block;
}
.qr span {
  font-size: 7px; font-weight: 800; letter-spacing: 0.06em;
  text-transform: uppercase; color: rgba(226,232,240,0.7);
}
.cta-actions { text-align: right; }
.cta-btn {
  display: inline-block; background: #00d4ff; color: #002147;
  font-family: 'Manrope', sans-serif; font-size: 11.5px; font-weight: 800;
  padding: 3mm 4.5mm; border-radius: 8px; border: 0; outline: 0;
  box-shadow: none; text-decoration: none;
}
.cta-meta { margin-top: 1.5mm; font-size: 7.5px; color: rgba(226,232,240,0.5); line-height: 1.4; }
.footer {
  position: absolute; left: 0; right: 0; bottom: 0; padding: 2.8mm 14mm;
  display: flex; justify-content: space-between; font-size: 7.5px; color: #64748b;
  background: #e2e8f0; border-top: 1px solid #cbd5e1;
}
.footer strong { color: #002147; }
"""

LOGO_IMG = '<img class="brand-mark" src="favicon.svg" alt="LynkaMed" />'

VERSIONS = [
  {
    "slug": "Rehab",
    "pill": "Rehab cardíaca · pulmonar · física",
    "eyebrow": "Para centros de rehabilitación que viven de protocolos, no de Excel",
    "h1": "El sistema que calcula scores, FC diana y reportes — <em>tú atiendes</em>",
    "lead": "Prueba de esfuerzo, estratificación INCH/AACVPR, expediente pulmonar, fisio y reporte final en un solo flujo. Menos captura manual. Más pacientes en protocolo.",
    "proof": ["Cálculos automáticos (Duke, Karvonen, METs)", "Cardíaco + pulmonar + fisio", "Multi-especialidad en una clínica"],
    "hook": "Si tu equipo sigue pasando scores a mano o repartiendo información entre carpetas, <span>estás perdiendo tiempo clínico (y dinero)</span>. LynkaMed nace de rehab real.",
    "benefits": [
      ("AI", "Dicta la evolución; la IA escribe la nota", "En fisio y seguimiento, documentar deja de ser el cuello de botella de la jornada."),
      ("01", "Protocolos cardíacos y pulmonares listos", "PE, estratificación, FC diana, VO2/METs y reportes finales — sin armar plantillas desde cero."),
      ("02", "Agenda + expediente + caja alineados", "El paciente llega, se atiende y se cobra sin saltar de sistema. Ideal con varios terapeutas."),
      ("03", "Una clínica, varios módulos", "Activa cardio, pulmonar y fisio según cómo operas. Crece sin migrar de software."),
    ],
    "stats": [
      ("+12", "Cálculos clínicos\nautomáticos"),
      ("30 días", "Gratis · sin tarjeta\nni compromiso"),
      ("15 min", "Demo con tu\nflujo de rehab"),
      ("2 meses", "Gratis al pagar\nanual"),
    ],
    "cmp": "Sistemas genéricos / suites hospitalarias suelen ir de <strong>$4,000–$8,000+/mes</strong> y aún te dejan armar plantillas. LynkaMed rehab: <strong>desde $3,000/mes</strong> con protocolos listos.",
    "prices": [
      ("Plan Rehabilitación", "$3,000", None, "cardíaco · pulmonar · fisio"),
      ("Consultorio / fisio solo", "$999", "$1,299", "si empiezas más chico"),
    ],
    "cta_title": "¿Quieres ver PE + estratificación en 15 minutos?",
    "cta_sub": "Demo con flujo de rehab — no un tour genérico. Trae tu duda de protocolo.",
  },
  {
    "slug": "Dental",
    "pill": "Clínicas y consultorios dentales",
    "eyebrow": "Para dentistas que quieren odontograma + cobro + plan de tratamiento juntos",
    "h1": "Odontograma, planes y caja en un solo lugar — <em>deja de perder citas y dinero</em>",
    "lead": "Historia dental, odontograma, presupuestos, agenda multi-doctor y portal del paciente. Lo que el paciente acepta en el sillón, lo cobras y documentas sin fricción.",
    "proof": ["Odontograma interactivo", "Presupuestos / planes de tx", "Multi-doctor y sucursales"],
    "hook": "Si el plan de tratamiento vive en PDF suelto y la caja en otra app, <span>estás dejando dinero sobre la mesa</span>. LynkaMed cierra el ciclo clínico-comercial.",
    "benefits": [
      ("AI", "Notas más rápidas con dictado", "Documenta la consulta hablando. Más sillón, menos teclado entre pacientes."),
      ("01", "Odontograma + plan de tratamiento", "Visualiza, presupuesta y da seguimiento sin reescribir piezas en tres lugares."),
      ("02", "Caja y CFDI cuando los necesites", "Cobros, egresos y facturación alineados al tratamiento — no al final del mes en pánico."),
      ("03", "Agenda multi-doctor que escala", "De un consultorio a clínica con varias sillas/sucursales, misma plataforma."),
    ],
    "stats": [
      ("#1", "Plan más elegido\nen lanzamiento"),
      ("30 días", "Gratis · sin tarjeta\nni compromiso"),
      ("15 min", "Demo con odontograma\ny presupuestos"),
      ("2 meses", "Gratis al pagar\nanual"),
    ],
    "cmp": "Softwares dentales “todo incluido” en México suelen cotizar <strong>$2,500–$5,000+/mes</strong>. LynkaMed dental en lanzamiento: <strong>$1,699/mes</strong> (antes $1,999) con odontograma y portal.",
    "prices": [
      ("Clínica dental", "$1,699", "$1,999", "el más elegido"),
      ("Consultorio dental", "$999", "$1,299", "independiente"),
    ],
    "cta_title": "¿Listo para ver odontograma + presupuesto en vivo?",
    "cta_sub": "Demo de 15 min enfocada en tu flujo: sillón → plan → cobro.",
  },
  {
    "slug": "Nutricion",
    "pill": "Nutriólogos y clínicas de nutrición",
    "eyebrow": "Para nutriólogos que miden adherencia, no solo la primera consulta",
    "h1": "Seguimiento nutricional que el paciente también ve — <em>más retención, menos no-shows</em>",
    "lead": "Historia nutricional, notas de seguimiento, agenda y portal del paciente. Comparte planes y avances sin mandar PDFs sueltos por WhatsApp.",
    "proof": ["Historia + seguimiento", "Portal del paciente", "Agenda y recordatorios"],
    "hook": "Si el plan se pierde en el chat y no sabes quién regresó, <span>tu consulta vale menos de lo que cobras</span>. LynkaMed ordena el ciclo completo.",
    "benefits": [
      ("AI", "Dicta la consulta nutricional", "SOAP / seguimiento más rápido. Más tiempo interpretando, menos tecleando."),
      ("01", "Expediente pensado para nutrición", "Evaluación y seguimiento sin campos de medicina general que no usas."),
      ("02", "Portal: el paciente ve su avance", "Comparte notas y documentos con OTP. Profesional, medible, sin depender del chat."),
      ("03", "Empieza solo, crece a clínica", "Consultorio hoy; mañana colaboras en una clínica — misma cuenta."),
    ],
    "stats": [
      ("$999", "Desde / mes\nen lanzamiento"),
      ("30 días", "Gratis · sin tarjeta\nni compromiso"),
      ("15 min", "Demo con tu\nflujo de consulta"),
      ("2 meses", "Gratis al pagar\nanual"),
    ],
    "cmp": "Suites médicas genéricas te cobran <strong>$1,800–$3,500+/mes</strong> por funciones que no usas. LynkaMed nutrición: <strong>$999/mes</strong> (antes $1,299) con portal incluido.",
    "prices": [
      ("Consultorio de nutrición", "$999", "$1,299", "lanzamiento"),
      ("Clínica / multi-especialidad", "$1,299+", None, "si combinas módulos"),
    ],
    "cta_title": "¿Quieres ver historia + portal en 15 minutos?",
    "cta_sub": "Demo corta. Te mostramos seguimiento y cómo lo ve el paciente.",
  },
  {
    "slug": "Cardiologia",
    "pill": "Cardiólogos y clínicas cardiovasculares",
    "eyebrow": "Para cardiólogos que documentan más allá de la nota genérica",
    "h1": "Historia cardiológica, ECG y eco en el mismo expediente — <em>listo para la siguiente cita</em>",
    "lead": "Expediente cardiovascular, electrocardiograma, ecocardiograma, recetas y agenda. Continuidad clínica sin perseguir archivos en el escritorio.",
    "proof": ["Historia cardiológica", "ECG y ecocardiograma", "Recetas y portal"],
    "hook": "Si el ECG está en una carpeta y la nota en otra, <span>la siguiente consulta empieza a ciegas</span>. LynkaMed concentra el flujo cardiológico.",
    "benefits": [
      ("AI", "Dicta la nota cardiológica", "Menos tiempo en pantalla entre pacientes. Más precisión en el relato clínico."),
      ("01", "Expediente + estudios juntos", "Historia, ECG y eco en el mismo paciente — sin reabrir tres sistemas."),
      ("02", "Agenda conectada al caso", "De la cita al expediente en un clic. Ideal en consulta privada o dentro de clínica."),
      ("03", "Comparte con el paciente con control", "Portal con OTP: resultados y recetas sin WhatsApp informal."),
    ],
    "stats": [
      ("$999+", "Desde / mes\nsegún operación"),
      ("30 días", "Gratis · sin tarjeta\nni compromiso"),
      ("15 min", "Demo cardiológica\nenfocada"),
      ("2 meses", "Gratis al pagar\nanual"),
    ],
    "cmp": "Expedientes clínicos electrónicos hospitalarios o genéricos: <strong>$3,000–$7,000+/mes</strong>. LynkaMed para cardiología en consultorio: <strong>desde $999/mes</strong> en lanzamiento; clínicas según módulos.",
    "prices": [
      ("Consultorio de cardiología", "$999", "$1,299", "lanzamiento"),
      ("Con módulos cardio avanzados", "Cotiza", None, "ECG / eco / clínica"),
    ],
    "cta_title": "¿Demo de 15 min con flujo cardiológico?",
    "cta_sub": "Historia + estudios + receta. Sin relleno de features que no usas.",
  },
  {
    "slug": "Psicologia",
    "pill": "Psicólogos y prácticas de salud mental",
    "eyebrow": "Para psicólogos que cuidan confidencialidad y continuidad de sesión",
    "h1": "Notas de sesión, agenda y portal seguro — <em>tu práctica, más profesional</em>",
    "lead": "Expediente psicológico, seguimiento, agenda y acceso del paciente con OTP. Menos improvisación en WhatsApp. Más orden clínico y administrativo.",
    "proof": ["Notas y seguimiento", "Agenda y recordatorios", "Portal con OTP"],
    "hook": "Si la historia clínica vive en documentos sueltos, <span>escalar a más pacientes se vuelve caótico</span>. LynkaMed ordena sin sentirse “hospitalario”.",
    "benefits": [
      ("AI", "Dicta después de sesión", "Vacía la cabeza al expediente rápido. Más energía para el siguiente paciente."),
      ("01", "Expediente de psicología", "Pensado para evaluación y seguimiento — no para quirófano."),
      ("02", "Agenda que reduce no-shows", "Citas claras + recordatorios. Tu tiempo clínico vale demasiado para huecos."),
      ("03", "Portal discreto para el paciente", "Comparte lo necesario con control. Imagen profesional frente a chats informales."),
    ],
    "stats": [
      ("$999", "Desde / mes\nen lanzamiento"),
      ("30 días", "Gratis · sin tarjeta\nni compromiso"),
      ("15 min", "Demo con tu\ntipo de consulta"),
      ("2 meses", "Gratis al pagar\nanual"),
    ],
    "cmp": "Plataformas genéricas o “all-in-one” médico: <strong>$1,800–$3,500+/mes</strong>. LynkaMed psicología: <strong>$999/mes</strong> (antes $1,299) con portal incluido.",
    "prices": [
      ("Consultorio de psicología", "$999", "$1,299", "lanzamiento"),
      ("Clínica / varios terapeutas", "$1,299+", None, "según operación"),
    ],
    "cta_title": "¿Quieres ver el flujo de sesión en 15 minutos?",
    "cta_sub": "Demo breve: nota → seguimiento → portal. Lenguaje de consultorio, no de hospital.",
  },
]


def render_prices(prices):
    rows = []
    for name, price, was, note in prices:
        was_html = f'<span class="was">{was}</span>' if was else ""
        save = '<span class="save">OFERTA</span>' if was else ""
        rows.append(
            f'<div class="price-row"><span>{name}<br/><small style="opacity:.65;font-size:8px">{note}</small></span>'
            f'<div>{was_html}<strong>{price}</strong>{save}</div></div>'
        )
    return "\n".join(rows)


def render_benefits(benefits):
    parts = []
    for ico, title, body in benefits:
        parts.append(
            f'<div class="benefit"><div class="benefit-ico">{ico}</div><div>'
            f'<h3>{title}</h3><p>{body}</p></div></div>'
        )
    return "\n".join(parts)


def render_stats(stats):
    parts = []
    for val, label in stats:
        parts.append(
            f'<div class="stat"><strong>{val}</strong><span>{label.replace(chr(10), "<br/>")}</span></div>'
        )
    return "\n".join(parts)


def render_proof(proof):
    return "\n".join(f"<span>{p}</span>" for p in proof)


def html_for(v: dict) -> str:
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>LynkaMed — {v['slug']}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>{CSS}</style>
</head>
<body>
  <div class="page">
    <div class="ribbon">Oferta de lanzamiento · Agosto 2026 · 30 días gratis · Precios por debajo del mercado</div>
    <header class="hero">
      <div class="hero-top">
        <div class="brand">
          {LOGO_IMG}
          <div>
            <div class="brand-word"><span class="lynka">lynka</span><span class="med">med</span></div>
            <div class="brand-sub">OSMEN TECH ENTERPRISE</div>
          </div>
        </div>
        <div class="pill">{v['pill']}</div>
      </div>
      <div class="hero-copy">
        <p class="eyebrow">{v['eyebrow']}</p>
        <h1>{v['h1']}</h1>
        <p class="lead">{v['lead']}</p>
        <div class="hero-proof">{render_proof(v['proof'])}</div>
      </div>
    </header>
    <div class="stats">{render_stats(v['stats'])}</div>
    <main class="body">
      <div class="hook"><p>{v['hook']}</p></div>
      <div class="cols">
        <div class="left-block">
          <p class="section-label">Por qué te cambia el consultorio</p>
          <div class="benefits">{render_benefits(v['benefits'])}</div>
        </div>
        <div class="right-col">
          <div class="pricing">
            <div class="pricing-badge">Lanzamiento · Solo este mes</div>
            <h2>Planes y precios</h2>
            <p class="sub">Empieza gratis. Quédate con tarifa de lanzamiento.</p>
            <div class="cmp">{v['cmp']}</div>
            {render_prices(v['prices'])}
            <p class="price-note">Anual = 2 meses gratis · Sin contrato mínimo · Cancela cuando quieras</p>
          </div>
          <div class="risk"><strong>Cero riesgo:</strong> 30 días gratis, sin tarjeta. Si no te ahorra tiempo en la primera semana, cancelas.</div>
        </div>
      </div>
    </main>
    <section class="cta">
      <div>
        <h3>{v['cta_title']}</h3>
        <p>{v['cta_sub']}</p>
      </div>
      <div class="cta-right">
        <div class="qr-row">
          <a class="qr" href="https://calendly.com/osnayama8/30min">
            <img src="qr/qr-demo.png" alt="QR Demo" />
            <span>Demo</span>
          </a>
          <a class="qr" href="https://app.lynkamed.mx/registro">
            <img src="qr/qr-app.png" alt="QR App" />
            <span>App</span>
          </a>
          <a class="qr" href="https://wa.me/525562297133">
            <img src="qr/qr-whatsapp.png" alt="QR WhatsApp" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div class="cta-actions">
          <a class="cta-btn" href="https://calendly.com/osnayama8/30min">Agendar Demo (15 min) →</a>
          <div class="cta-meta">Escanea o escribe · +52 55 6229 7133<br/>app.lynkamed.mx/registro · ventas@lynkamed.mx</div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div><strong>LynkaMed</strong> · OSMEN TECH ENTERPRISE · NOM</div>
      <div>Versión {v['slug']} · Agosto 2026</div>
    </footer>
  </div>
</body>
</html>
"""


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for v in VERSIONS:
        html_path = OUT / f"lynkamed-onepager-{v['slug'].lower()}.html"
        pdf_path = OUT / f"LynkaMed-OnePager-{v['slug']}.pdf"
        html_path.write_text(html_for(v), encoding="utf-8")
        subprocess.run(
            [
                CHROME, "--headless=new", "--disable-gpu",
                "--no-pdf-header-footer", "--print-to-pdf-no-header",
                f"--print-to-pdf={pdf_path}",
                html_path.as_uri(),
            ],
            check=True,
            capture_output=True,
        )
        print("OK", pdf_path.name)

    # Also refresh general one-pager button fix (use dental-ish general from first design lightly)
    print("Done", len(VERSIONS), "PDFs")


if __name__ == "__main__":
    main()
