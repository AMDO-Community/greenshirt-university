import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Card({title, children, to}) {
  return (
    <div style={{
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 14,
      padding: 18,
      background: 'rgba(255,255,255,0.9)',
      boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
      <h3 style={{margin: 0}}>{title}</h3>
      <div style={{opacity: 0.9, lineHeight: 1.5}}>{children}</div>
      {to ? (
        <div style={{marginTop: 'auto'}}>
          <Link
            className="button button--primary button--sm"
            to={to}
            style={{borderRadius: 10}}
          >
            Open
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Greenshirt University"
      description="AMDO | LDO | CWO Maintenance Leadership"
    >
      <main>
        <section style={{
          padding: '72px 0 38px 0',
          background: 'linear-gradient(135deg, #0e7a3a 0%, #0a5b2b 60%, #063a1b 100%)',
          color: 'white'
        }}>
          <div className="container">
            <div style={{maxWidth: 820}}>
              <div style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
                fontSize: 13,
                letterSpacing: 0.2
              }}>
                GSU, built for day-to-day maintenance leadership
              </div>

              <h1 style={{marginTop: 16, marginBottom: 12, fontSize: 48}}>
                Greenshirt University
              </h1>

              <p style={{marginTop: 0, marginBottom: 22, fontSize: 18, opacity: 0.92, lineHeight: 1.6}}>
                A practical reference for AMDO, LDO, and CWO leaders.
                Fundamentals, watchstations, and oral board prep in one place.
              </p>

              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                <Link className="button button--primary button--lg" to="/welcome">
                  Start here
                </Link>
                <Link className="button button--outline button--lg" to="/fundamentals">
                  Fundamentals
                </Link>
                <Link className="button button--outline button--lg" to="/watchstations">
                  Watchstations
                </Link>
                <Link className="button button--outline button--lg" to="/oral-board">
                  Oral board
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{padding: '34px 0 56px 0'}}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16
            }}>
              <Card title="What this is" to="/welcome">
                Short, usable pages for real maintenance leadership scenarios.
                Built to be searched quickly and reviewed often.
              </Card>

              <Card title="How to use it" to="/fundamentals">
                Read Fundamentals in order, then use Watchstations as a reference,
                and drill Oral board Q&amp;A weekly.
              </Card>

              <Card title="Contribute" to="/welcome">
                Add or improve a page.
                Keep it clear, concrete, and useful to someone standing duty.
              </Card>
            </div>

            <div style={{
              marginTop: 26,
              padding: 18,
              borderRadius: 14,
              background: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.06)'
            }}>
              <strong>Tip:</strong> If a page is longer than 3 minutes to read, break it into smaller pages.
              Fast retrieval beats perfect writing.
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
