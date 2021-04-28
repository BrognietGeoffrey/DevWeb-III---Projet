"""empty message

Revision ID: 6d476fe19021
Revises: d073b4de326e
Create Date: 2021-04-28 02:07:53.336243

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d476fe19021'
down_revision = 'd073b4de326e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('cId', sa.Integer(), nullable=False),
    sa.Column('cName', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('cId')
    )
    op.create_table('profils',
    sa.Column('pId', sa.Integer(), nullable=False),
    sa.Column('pName', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('pId')
    )
    op.create_table('tags',
    sa.Column('tId', sa.Integer(), nullable=False),
    sa.Column('tName', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('tId')
    )
    op.create_table('userprofils',
    sa.Column('uId', sa.Integer(), nullable=False),
    sa.Column('pId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['pId'], ['profils.pId'], ),
    sa.ForeignKeyConstraint(['uId'], ['users.uId'], ),
    sa.PrimaryKeyConstraint('uId', 'pId')
    )
    op.create_table('notecategories',
    sa.Column('nId', sa.Integer(), nullable=False),
    sa.Column('cId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cId'], ['categories.cId'], ),
    sa.ForeignKeyConstraint(['nId'], ['notes.nId'], ),
    sa.PrimaryKeyConstraint('nId', 'cId')
    )
    op.create_table('notetags',
    sa.Column('nId', sa.Integer(), nullable=False),
    sa.Column('tId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['nId'], ['notes.nId'], ),
    sa.ForeignKeyConstraint(['tId'], ['tags.tId'], ),
    sa.PrimaryKeyConstraint('nId', 'tId')
    )
    op.create_table('noteusers',
    sa.Column('nId', sa.Integer(), nullable=False),
    sa.Column('uId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['nId'], ['notes.nId'], ),
    sa.ForeignKeyConstraint(['uId'], ['users.uId'], ),
    sa.PrimaryKeyConstraint('nId', 'uId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('noteusers')
    op.drop_table('notetags')
    op.drop_table('notecategories')
    op.drop_table('userprofils')
    op.drop_table('tags')
    op.drop_table('profils')
    op.drop_table('categories')
    # ### end Alembic commands ###
